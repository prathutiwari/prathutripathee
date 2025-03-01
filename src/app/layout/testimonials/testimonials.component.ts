import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  feedback=[
    {
      id:'1',
      name:'Daniel Lewis',
      image:'assets/images/avatar-1.png',
      short_desc:'Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
      content:'Ricardo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      id:'2',
      name:'Jessica Miller',
      image:'assets/images/avatar-2.png',
      short_desc:'Thanks to the skill of Ricardo, we have a design that we can be proud of. We are impressed with...',
      content:'Ricardo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'

    },
    {
      id:'3',
      name:'Emily Evans',
      image:'assets/images/avatar-3.png',
      short_desc:'Ricardo did a miracle with my website. It looks exactly as I imagined it. Now I have a profession...',
      content:'Ricardo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    },
    {
      id:'4',
      name:'Henry William',
      image:'assets/images/avatar-4.png',
      short_desc:'Thank you very much for your work on our project. It was a big help for us. Thanks to the...',
      content:'Ricardo was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
