import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { LoginUser } from './LoginUser';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http : HttpClient) { }

  public registerUser(User: User) {
    
    return this.http.post("http://localhost:8081/register", User, {responseType : "text" as "json"});

  }

  public checkLogin(user: LoginUser) {
    return this.http.get("http://localhost:8081/search/Prachi");
  }

}