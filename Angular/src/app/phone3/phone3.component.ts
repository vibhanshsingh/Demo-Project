import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-phone3',
  templateUrl: './phone3.component.html',
  styleUrls: ['./phone3.component.css'],
  encapsulation: ViewEncapsulation.None

  // animations:[  trigger('fade', [

  //   transition('void => *', [style({backgroundColor: 'white', opacity: 0}), 
  //   animate(2000, style({backgroundColor: 'yellow', opacity: 1}))
  //   ])

  // ])
  // ],
})
export class Phone3Component implements OnInit {


  slides = [
    {'image': './assets/c3/1.jpeg'}, 
    {'image': './assets/c3/2.jpeg'},
    {'image': './assets/c3/3.jpeg'}, 
    {'image': './assets/c3/4.jpeg'},
    {'image': './assets/c3/5.jpeg'},

  ];

  ngOnInit(): void {
  }
    
}