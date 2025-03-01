const { writeFile } = require('fs');
// const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = process.env["ENVIRONMENT"];
const isProduction = environment === 'prod';
const targetPath = isProduction ? `./src/environments/environment.prod.ts` : `./src/environments/environment.ts`;
console.log(environment);

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function(err: any) {
	if (err) {
		console.log(err);
	}
	console.log(`Wrote variables to ${targetPath}`);
});
