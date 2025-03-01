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
      name: 'HTML5',
      percentage: '100',
      percentageTxt:'100%'
    },
    {
      id: '2',
      name: 'CSS',
      percentage: '100',
      percentageTxt:'100%'
    },
    {
      id: '3',
      name: 'Bootstrap',
      percentage: '100',
      percentageTxt:'100%'
    },
    {
      id: '4',
      name: 'JS & ES',
      percentage: '70',
      percentageTxt:'70%'
    },
    {
      id: '5',
      name: 'JQuery',
      percentage: '70',
      percentageTxt:'70%'
    },
    {
      id: '6',
      name: 'Angular',
      percentage: '85',
      percentageTxt:'85%'
    }

  ]
  tools = [
    {
      id: '1',
      name: 'Shopity',
      percentage: '80',
      percentageTxt:'80%'
    },
    {
      id: '2',
      name: 'Liferay',
      percentage: '45',
      percentageTxt:'45%'
    },
    {
      id: '3',
      name: 'Directus',
      percentage: '70',
      percentageTxt:'70%'
    },
    {
      id: '4',
      name: 'Canva',
      percentage: '100',
      percentageTxt:'100%'
    },
    {
      id: '5',
      name: 'WordPress',
      percentage: '70',
      percentageTxt:'70%'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
