import { Form } from './../models/global-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
@Input() public form!:Form;
  constructor() { }

  ngOnInit(): void {
  }

}
