
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import{ Router} from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 
  constructor(public authService: AuthService,private fb:FormBuilder, public router:Router){}
  profileForm =  this.fb.group({
    name:['',Validators.required],
    username:['',Validators.required],
     password:['',Validators.required]
      });
      get username() { return this.profileForm.get('username')
       }
       get password() { return this.profileForm.get('password')
       }
      get name() 
      {
        return this.profileForm.get('name');
      }
      //getFormControl(name) {
   // return this.profileForm.get(name);
//}
data:string;
clickdata(){

}
  onSubmit(data){
  
    this.router.navigate(['home']);
    

    this.authService.register(data).subscribe((data:any) => {
     
    this.data=data;

    //alert(JSON.stringify(this.data));
    });
    
       
        this.router.navigate(['login']);

    
  }
}