import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCarouselComponent, MatCarousel } from '@ngmodule/material-carousel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  slides = [
    {'image': 'https://www.poco.in/images/c3-1/D/banner-01.jpg'}, 
    {'image': 'https://www.poco.in/images/f3-gt-pdt/D/banner-01.jpg'},
    {'image': 'https://www.poco.in/images/m3-pro-pdt/D/banner_1.jpg'}, 
    {'image': 'https://www.poco.in/images/x3-pro/desk/POCO-55127_X3_web_launch_ALL_02.png'},

  ];

   constructor(private router: Router) { }

   goToPhone1(phone1:string):void {
    this.router.navigate([`${phone1}`]);
  }

  goToPhone2(phone2:string):void {
    this.router.navigate([`${phone2}`]);
  }

  goToPhone3(phone3:string):void {
    this.router.navigate([`${phone3}`]);
  }

  goToPhone4(phone4:string):void {
    this.router.navigate([`${phone4}`]);
  }


  ngOnInit(): void {
  }

}
