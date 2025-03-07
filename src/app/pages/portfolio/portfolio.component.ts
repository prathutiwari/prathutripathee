import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  projectData = [
    { id:1, name:'Brooklyn Data', webLink: 'https://brooklyndata.co/', img:'assets/images/projects/bdc.png', categoryClass:'category-applications', category:'Applications', desc:'This website is made by me' },
    { id:2, name:'BestPriceForCar', webLink: 'https://bestpriceforcar.com/', img:'assets/images/projects/bestprice.png', categoryClass:'category-design', category:'Web Design', desc:'This website is made by me' },
    { id:4, name:'Sell My EV', webLink: 'https://sellmyev.com/', img:'assets/images/projects/sellmyev.png', categoryClass:'category-applications', category:'Applications', desc:'This website is made by me' },
    { id:5, name:'DigiVogue', webLink: 'https://digivogue.org/', img:'assets/images/projects/digi.png', categoryClass:'category-design', category:'Web Design', desc:'This website is made by me' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.initFilters(), 0); // Delay to ensure DOM updates
      }
    });
  }

  ngAfterViewInit(): void {
    this.initFilters();
  }

  initFilters() {
    const filterItems = document.querySelectorAll('.filter__item');
    filterItems.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.filter__item.active')?.classList.remove('active');
        item.classList.add('active');
        const filterValue = item.getAttribute('data-filter');
        this.applyFilter(filterValue);
      });
    });
  }

  applyFilter(filterValue: string | null) {
    const items = document.querySelectorAll('.gallery-grid__item');
    items.forEach(item => {
      if (!filterValue || filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }
}