import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumersComponent } from './custumers/custumers.component';
import{RouterModule,Routes} from '@angular/router';
import { PrimeComponent } from './prime/prime.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
  {path:'',component:CustumersComponent},
   {path:'prime',component:PrimeComponent}
  ])],
  declarations: [CustumersComponent, PrimeComponent]
})
export class CustomerModule { }