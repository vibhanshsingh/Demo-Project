import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-phone2',
  templateUrl: './phone2.component.html',
  styleUrls: ['./phone2.component.css'],
  encapsulation: ViewEncapsulation.None

  // animations:[  trigger('fade', [

  //   transition('void => *', [style({backgroundColor: 'white', opacity: 0}), 
  //   animate(2000, style({backgroundColor: 'yellow', opacity: 1}))
  //   ])

  // ])
  // ],
})
export class Phone2Component implements OnInit {


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