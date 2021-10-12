import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-phone1',
  templateUrl: './phone4.component.html',
  styleUrls: ['./phone4.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class Phone4Component implements OnInit {


  slides = [
    {'image': './assets/x3Pro/1.jpeg'}, 
    {'image': './assets/x3Pro/2.jpeg'},
    {'image': './assets/x3Pro/3.jpeg'}, 
    {'image': './assets/x3Pro/4.jpeg'},
    {'image': './assets/x3Pro/5.jpeg'},

  ];

  ngOnInit(): void {
  }
    
}