import { Gallery } from './../models/global-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
@Input() public gallery!:Gallery;
  constructor() { }

  ngOnInit(): void {
  }

}
