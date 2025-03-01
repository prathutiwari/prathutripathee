import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogData = [
    {
      id:1,
      title:'Stop Procrastinating by 2 Minute rule',
      short_desc:'In the world of social media many of us procrastinate. We used to think that we just scroll reels...',
      webLink:'https://docs.google.com/document/d/1plJOqQvP7d-iM2DYG4ehuVvadyUkOeIlg4jiPD3b9_s/edit?usp=sharing',
      tag:'Procrastination',
      date:'Feb 28, 2023',
      img:'assets/images/blogs/blog1.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
