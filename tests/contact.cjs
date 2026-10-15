const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const assert = require('node:assert/strict');
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const loadedModule = {exports:{}};
  new Function('require','module','exports',code)(name=>name.startsWith('@/')?load(`src/${name.slice(2)}.ts`):require(name),loadedModule,loadedModule.exports);
  cache.set(file,loadedModule.exports); return loadedModule.exports;
}
const {validateInquiry} = load('src/lib/contact.ts');
const {POST} = load('src/app/api/contact/route.ts');
const base = {name:'Test Visitor',email:'visitor@example.com',type:'Shopify development',website:'https://example.com',message:'A test inquiry about a custom Shopify section.',company:'',startedAt:Date.now()-5000};
const originalFetch=global.fetch;
const keys=['SITE_URL','CONTACT_FORM_ENABLED','RESEND_API_KEY','CONTACT_FROM'];
const old=Object.fromEntries(keys.map(k=>[k,process.env[k]]));
let calls=0;
function request(data=base,origin='http://localhost:3000'){return new Request('http://localhost:3000/api/contact',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(data)});}
(async()=>{
  process.env.SITE_URL='http://localhost:3000';
  process.env.CONTACT_FORM_ENABLED='false'; delete process.env.RESEND_API_KEY;
  global.fetch=async()=>{calls++;return Response.json({id:'mock-id'});};
  assert.ok(validateInquiry(base).data);
  assert.ok(validateInquiry({...base,email:'bad\naddress'}).error);
  assert.ok(validateInquiry({...base,website:'javascript:alert(1)'}).error);
  assert.ok(validateInquiry({...base,message:'short'}).error);
  assert.equal((await POST(request(base,'https://unrelated.example'))).status,403);
  assert.equal((await POST(request({...base,company:'bot'}))).status,400);
  assert.equal((await POST(request({...base,startedAt:Date.now()}))).status,400);
  assert.equal((await POST(request())).status,503);
  assert.equal(calls,0,'Unconfigured and invalid requests must never call the provider');
  process.env.CONTACT_FORM_ENABLED='true';process.env.RESEND_API_KEY='test-only';process.env.CONTACT_FROM='Test <test@example.com>';
  assert.ok(validateInquiry({...base,phone:'+91 7355732435'}).data);
  assert.ok(validateInquiry({...base,phone:'invalid'}).error);
  let sent;
  global.fetch=async(url,options)=>{assert.equal(url,'https://api.resend.com/emails');sent=JSON.parse(options.body);return Response.json({id:'mock-email'});};
  const success=await POST(request({...base,phone:'+91 7355732435'}));
  assert.equal(success.status,200);
  assert.match((await success.json()).message,/inquiry has been submitted/);
  assert.deepEqual(sent.to,['prathutiwari22@gmail.com']);
  assert.equal(sent.reply_to,base.email);
  assert.ok(sent.text.includes(base.message));
  assert.ok(sent.text.includes('+91 7355732435'));
  assert.equal(sent.html,undefined);
  global.fetch=async()=>Response.json({error:'rejected'},{status:500});
  assert.equal((await POST(request({...base,email:'rejected@example.com'}))).status,502);
  global.fetch=async()=>{throw new Error('timeout');};
  assert.equal((await POST(request({...base,email:'timeout@example.com'}))).status,502);
  global.fetch=async()=>Response.json({});
  assert.equal((await POST(request({...base,email:'unconfirmed@example.com'}))).status,502);
  delete process.env.RESEND_API_KEY;
  global.fetch=async()=>{throw new Error('Should not call unconfigured service');};
  assert.equal((await POST(request({...base,email:'unconfigured@example.com'}))).status,503);
  process.env.RESEND_API_KEY='test-only';
  global.fetch=async()=>Response.json({id:'mock-email'});
  await POST(request());await POST(request());
  assert.equal((await POST(request())).status,429);
  console.log('Email-only contact checks passed: validation, recipient, reply-to, optional phone, confirmed success, provider failures and throttling. No real email sent.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>{global.fetch=originalFetch;for(const k of keys){if(old[k]===undefined)delete process.env[k];else process.env[k]=old[k];}});


