import { Component } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  
  constructor(private fb:FormBuilder){}
  profileForm =  this.fb.group({
    name:['abi',Validators.required,Validators.min[4]],
    name1:['psw',Validators.required,Validators.min[4]]
      });
      get name1() { return this.profileForm.get('name1') }
      get name() { return this.profileForm.get('name') }
      //getFormControl(name) {
   // return this.profileForm.get(name);
//}
  onSubmit(data){
    alert(data.name+' '+data.name1);
  }
}
