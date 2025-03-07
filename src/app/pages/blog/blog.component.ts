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
      title:'JavaScript Promise APIs Explained',
      short_desc:'Promises are used to handle async operations in JavaScript. Promises are nothing you can assume...',
      webLink:'https://namastedev.com/blog/javascript-promise-apis-explained-when-to-use-all-allsettled-race-and-any/',
      tag:'JavaScript',
      date:'March 5, 2025',
    },
    {
      id:2,
      title:'Hooks : useMemo, useCallback & useRef',
      short_desc:'useMemo is a react hook that lets you cache the calculation results between re-renders...',
      webLink:'https://namastedev.com/blog/hooks-usememo-usecallback-useref/',
      tag:'React, JavaScript, Hooks',
      date:'Nov 19, 2024',
    },
    {
      id:3,
      title:'Stop Procrastinating by 2 Minute rule',
      short_desc:'In the world of social media many of us procrastinate. We used to think that we just scroll reels...',
      webLink:'https://docs.google.com/document/d/1plJOqQvP7d-iM2DYG4ehuVvadyUkOeIlg4jiPD3b9_s/edit?usp=sharing',
      tag:'Procrastination',
      date:'Feb 28, 2023',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
