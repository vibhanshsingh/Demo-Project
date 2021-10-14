import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Phone1Component } from './phone1/phone1.component';
import { AllHomeComponent } from './all-home/all-home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Phone3Component } from './phone3/phone3.component';
import { Phone2Component } from './phone2/phone2.component';
import { Phone4Component } from './phone4/phone4.component';
import { NewComponent } from './new/new.component';
import { CartComponent } from './cart/cart.component';
import { AllProductComponent } from './all-product/all-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    Phone1Component,
    AllHomeComponent,
    Phone3Component,
    Phone2Component,
    Phone4Component,
    NewComponent,
    CartComponent,
    AllProductComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatMenuModule,
    MatCarouselModule.forRoot(),
    MDBBootstrapModule,
    ReactiveFormsModule,
    YouTubePlayerModule
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
