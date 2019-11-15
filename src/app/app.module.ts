import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './home/books/books.component';
import { PenComponent } from './home/pen/pen.component';
import { AuthGuard} from './auth.guard';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule,HttpClientModule, FormsModule ,
  RouterModule.forRoot([
    {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,canActivate: [AuthGuard]
  ,children:[{path:'books',component:BooksComponent},
            {path:'pen',component:PenComponent}]
  },{path:'customer',loadChildren:'./customer/customer/customer.module#CustomerModule'},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent}])],
  declarations: [ AppComponent,HelloComponent, HomeComponent, HomeComponent, LoginComponent, BooksComponent, PenComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers:[AuthGuard, AuthService]
})
export class AppModule { }
