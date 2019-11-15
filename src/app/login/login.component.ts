import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import{ Router} from '@angular/router';

import { AuthService } from '../auth.service';
@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent  {
  wrongpass:boolean;
  constructor(public authService: AuthService,private fb:FormBuilder, public router:Router){}
  profileForm =  this.fb.group({
    
    username:['',Validators.required],
     password:['',Validators.required]
      });
      get username() { return this.profileForm.get('username')
       }
       get password() { return this.profileForm.get('password')
       }
      
      //getFormControl(name) {
   // return this.profileForm.get(name);
//}
data:string;
clickdata(){

}
  onSubmit(data){
  
    
    

    this.authService.login(data).subscribe((data1:any) => {
      
    this.authService.isLoggedIn=data1.auth;
if (data1.auth) {
       localStorage.setItem('token',data1.token);
        this.router.navigate(['home']);
        //alert(localStorage.getItem('token'));
    }

    if(!data1){
      this.wrongpass=true;
    }else{
      this.wrongpass=false;
    }

    
    });
    
  }
}
