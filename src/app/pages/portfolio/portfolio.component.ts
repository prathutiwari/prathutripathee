import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  projectData = [
    {
      id: 1,
      name: 'Flix-GPT',
      webLink: 'https://flix-gpt-xi.vercel.app',
      img: 'assets/images/projects/netflix.png',
      categoryClass: 'category-applications',
      category: 'Applications',
      desc: 'This is a clone of Netflix made using React, Firebase, Redux, Implemented secure authentication & authorization via Firebase for protected user access & Developed an AI-powered streaming platform.',
    },
    {
      id: 2,
      name: 'Dairy Delight',
      webLink: 'https://brooklyndata.co/',
      img: 'assets/images/projects/dairy.png',
      categoryClass: 'category-applications',
      category: 'Applications',
      desc: 'Developed a responsive dairy e-commerce platform with seamless product browsing with real-time updates for pricing, categories, and availability.',
    },
    {
      id: 3,
      name: 'DigiVogue',
      webLink: 'https://digivogue.org/',
      img: 'assets/images/projects/digi.png',
      categoryClass: 'category-design',
      category: 'Web Design',
      desc: 'Built a modern digital agency website with a sleek, responsive design for enhanced user engagement.Implemented interactive UI/UX elements and optimized performance for a seamless browsing experience.',
    },
    {
      id: 4,
      name: 'BestPriceForCar',
      webLink: 'https://bestpriceforcar.com/',
      img: 'assets/images/projects/bestprice.png',
      categoryClass: 'category-design',
      category: 'Web Design',
      desc: 'Angular based car selling website & Admin Portal for dealers to get the leads of the customers to sell/buy car.',
    },
    {
      id: 5,
      name: 'Vitapod World',
      webLink: 'https://www.vitapodworld.com/',
      img: 'assets/images/projects/vitapod.png',
      categoryClass: 'category-web-development',
      category: 'Applications',
      desc: 'Created a Ecommerce store from scratch with Shopify Plus',
    }
    
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
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
    filterItems.forEach((item) => {
      item.addEventListener('click', () => {
        document
          .querySelector('.filter__item.active')
          ?.classList.remove('active');
        item.classList.add('active');
        const filterValue = item.getAttribute('data-filter');
        this.applyFilter(filterValue);
      });
    });
  }

  applyFilter(filterValue: string | null) {
    const items = document.querySelectorAll('.gallery-grid__item');
    items.forEach((item) => {
      if (
        !filterValue ||
        filterValue === '*' ||
        item.classList.contains(filterValue.substring(1))
      ) {
        (item as HTMLElement).style.display = 'block';
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }
}
