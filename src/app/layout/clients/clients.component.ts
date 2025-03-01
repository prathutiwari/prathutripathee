import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  
  myClient=[
    {
      id:'1',
      clientImage:'assets/images/clients/logo-1-color.png'
    },
    {
      id:'2',
      clientImage:'assets/images/clients/logo-2-color.png'
    },
    {
      id:'3',
      clientImage:'assets/images/clients/logo-3-color.png'
    },
    {
      id:'4',
      clientImage:'assets/images/clients/logo-4-color.png'
    },
    {
      id:'5',
      clientImage:'assets/images/clients/logo-5-color.png'
    },
    {
      id:'6',
      clientImage:'assets/images/clients/logo-6-color.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
