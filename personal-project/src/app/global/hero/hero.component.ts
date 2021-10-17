import { Component, Input, OnInit } from '@angular/core';
import { HeroModels } from './models/hero-models';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public heroModels!:HeroModels;
  constructor() { 
    this.heroModels={
      logo1:{
        src:'https://i.pinimg.com/originals/57/2a/f2/572af2fdb5c4ae0936c9b0894efc1867.png',
        alt:'legion de reconocimiento'
      },
      logo2:{
        src:'https://imgur.com/rqHY9iq.png',
        alt:'policia'
      },
      logo3:{
        src:'https://imgur.com/52iSyco.png',
        alt:'tropas estacionarias'
      },
      logo4:{
        src:'https://imgur.com/2zybZMf.png',
        alt:'reclutas'
      },
      button:'legion'
    
    }
  }

  ngOnInit(): void {
  }
  public onClickButton():void{
    if(this.heroModels.button=='legion'){
      this.heroModels.button='policia'
    }else if(this.heroModels.button=='policia'){
      this.heroModels.button='tropas'
    }else if(this.heroModels.button=='tropas'){
      this.heroModels.button='reclutas'
    }else if(this.heroModels.button=='reclutas'){
      this.heroModels.button='legion'
    }
  } 
}
