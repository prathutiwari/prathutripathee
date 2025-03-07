import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      id: '1',
      name: 'React Js'
    },
    {
      id: '2',
      name: 'React Native'
    },
    {
      id: '3',
      name: 'Angular'
    },
    {
      id: '4',
      name: 'JS & ES'
    },
    {
      id: '5',
      name: 'JQuery'
    },
    {
      id: '6',
      name: 'HTML'
    },
    {
      id: '7',
      name: 'CSS'
    },
    {
      id: '8',
      name: 'Bootstrap'
    },
    {
      id: '9',
      name: 'Tailwind'
    },
    {
      id: '10',
      name: 'Material UI'
    }

  ]
  tools = [
    {
      id: '1',
      name: 'Shopity'
    },
    {
      id: '2',
      name: 'FIGMA'
    },
    {
      id: '3',
      name: 'Vercel'
    },
    {
      id: '4',
      name: 'Firebase'
    },
    {
      id: '5',
      name: 'GitHub'
    },
    {
      id: '6',
      name: 'Canva'
    },
    {
      id: '7',
      name: 'Directus'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
