import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  @Input() inputText:string='';

  @Output() emitText= new EventEmitter<string>();
  public message:string='';
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage (){
    this.emitText.emit('😊Gracias por participar!! A nosotros también nos encanta '+this.message);
  }
}
