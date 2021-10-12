import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  goToLoginPage(login:string):void{
    this.router.navigate([`${login}`]);
  }

  goToRegisterPage(register:string):void {
    this.router.navigate([`${register}`]);
  }
  
  ngOnInit(): void {
  }

}
