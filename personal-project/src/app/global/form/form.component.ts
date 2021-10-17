
import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
//@Input() public form!:Form;
public inputText:string='';
public sonMessage:string='';
  constructor() { }

  ngOnInit(): void {
  }
  public setMessage(message:string){
    this.sonMessage=message;
  } 
}
