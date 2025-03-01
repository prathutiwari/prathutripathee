import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  education=[
    {
      id:'1',
      schoollName:'Amity University, Noida',
      years:'2021 — 2023',
      course:'M.C.A',
      description:'',
      subDescription:'CGPA: 8.1'
    },
    {
      id:'2',
      schoollName:'C.S.J.M.U, Kanpur',
      years:'2018-2021',
      course:'Bachelors',
      description:'',
      subDescription:''
    },
    {
      id:'3',
      schoollName:'S.J. Education Center',
      years:'2016-2017',
      course:'Intermediate',
      description:'PCM',
      subDescription:'Score: 75%'
    },
    {
      id:'4',
      schoollName:'Radha Krishna Public School',
      years:'2014-2015',
      course:'HighScool',
      description:'Science & Computer Science',
      subDescription:'Score: 78%'
    }
  ]
  experience=[
    {
      id:'1',
      designation:'Frontend Developer',
      timeline:'Feb 2021 - Current',
      companyName:'ZiggleTech INC',
      description:'Frontend Developer'
    },
    {
      id:'2',
      designation:'Frontend Developer',
      timeline:'2020-2021',
      companyName:'Freelance',
      description:'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
