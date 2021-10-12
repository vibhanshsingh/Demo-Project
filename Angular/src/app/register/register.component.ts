import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../User';

@Component({
  
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})

export class RegisterComponent implements OnInit {

  user : User = new User("", "", "", 0, 0);
  message : any;

  constructor(private route:Router, private service:RegisterService ) {}

  goToHomePage(home:string):void {
    this.route.navigate([`${home}`]);
  }

  public registerNow() {
    let response = this.service.registerUser(this.user);
    response.subscribe(data =>{
      this.message = data;
    })
  }


  ngOnInit(): void {
  }

}
