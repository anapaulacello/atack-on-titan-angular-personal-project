import { Component, OnInit } from '@angular/core';
import { GlobalModel } from './models/global-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
public globalModel!:GlobalModel;
  constructor() {
    this.globalModel={
      nav:{
        img:{
          src:'https://imgur.com/yY5tUe4.png',
          alt:'logo'
        }
      },
      
      gallery:{
        card:[
          {
            img:{
              src:'https://imgur.com/oDoqI9i.jpg',
              alt:'Eren'
            },
            name:'Eren Jeager'
          },
          {
            img:{
              src:'https://imgur.com/tIUy1q1.jpg',
              alt:'Mikasa Ackerman'
            },
            name:'Mikasa Ackerman'
          },
          {
            img:{
              src:'https://imgur.com/pkCKUGC.jpg',
              alt:'Arminm Arlert'
            },
            name:'Arminm Arlert'
          }
        ]
      },
      /* form:{
        title:'Cuál es tu personaje favorito??'
      } */
    }
   }

  ngOnInit(): void {
  }

}
