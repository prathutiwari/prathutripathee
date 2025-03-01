import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // category-applications, category-web-development, category-design classes for filter
  // categories are Web Design, Web Dvelopment, Applications

  projectData = [
      {
        id:1,
        name:'Brooklyn Data',
        webLink: 'https://brooklyndata.co/',
        img:'assets/images/projects/bdc.png',
        categoryClass:'category-applications',
        category:'Applications',
        desc:'This website is made by me'
      },
      {
        id:2,
        name:'BestPriceForCar',
        webLink: 'https://bestpriceforcar.com/',
        img:'assets/images/projects/bestprice.png',
        categoryClass:'category-design',
        category:'Web Design',
        desc:'This website is made by me'
      },
      {
        id:3,
        name:'Real Estate',
        webLink: 'https://pensive-wing-d9457d.netlify.app/',
        img:'assets/images/projects/rdata.png',
        categoryClass:'category-web-development',
        category:'Web Development',
        desc:'This website is made by me'
      },
      {
        id:4,
        name:'Sell My EV',
        webLink: 'https://sellmyev.com/',
        img:'assets/images/projects/sellmyev.png',
        categoryClass:'category-applications',
        category:'Applications',
        desc:'This website is made by me'
      },
      {
        id:5,
        name:'E-Commerce Website',
        webLink: 'https://brooklyndata.co/',
        img:'assets/images/projects/ecom-website.png',
        categoryClass:'category-web-development',
        category:'Web Development',
        desc:'This website is made by me'
      },
      {
        id:6,
        name:'DigiVogue',
        webLink: 'https://brooklyndata.co/',
        img:'assets/images/projects/digi.png',
        categoryClass:'category-design',
        category:'Web Design',
        desc:'This website is made by me'
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
