import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHomeComponent } from './all-home/all-home.component';
import { LoginComponent } from './login/login.component';
import { Phone1Component } from './phone1/phone1.component';
import { RegisterComponent } from './register/register.component';
import { Phone3Component } from './phone3/phone3.component';
import { Phone2Component } from './phone2/phone2.component';
import { Phone4Component } from './phone4/phone4.component';

const routes: Routes = [ 
  {path: '', redirectTo:'/home', pathMatch: 'full' },
  // {path: '**', component: PageNotFound },
  {path: 'home', component: AllHomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'app/register', component: RegisterComponent},
  {path: 'x3-pro', component: Phone1Component},
  {path: 'm3-pro', component: Phone2Component},
  {path: 'c3', component: Phone3Component},
  {path: 'F3-GT', component: Phone4Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }