import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../home/home.component';
import { LoginUser } from '../LoginUser';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user : LoginUser = new LoginUser("", 0);

  constructor(private router:Router, private service : RegisterService) { }

  goToHomePage(home:string):void {
    this.router.navigate([`${home}`]);
  }

  ngOnInit(): void {
  }

  public loginNow() {
    let response = this.service.checkLogin(this.user);
  }

}
