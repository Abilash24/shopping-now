import { Component ,OnInit} from '@angular/core';
import {Products} from './products';
import { AuthService }      from '../auth.service';
import{ Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  token:string;
  profiledetails:any;
products:Products[]=[{name:'books',
                    discription:'good books',
                    price:20},
                    {name:'pen',
                    discription:'nice pen',
                    price:20}]

public files: any;

ngOnInit(){
  this.http.get('https://abiapp24.herokuapp.com/log').subscribe((y:any) => {console.log(y)
  this.profiledetails=y}
  );
  
  alert 
}



  constructor(public authService:AuthService,public http:HttpClient,public router:Router) { this.files = [];}
 logout() {
    this.authService.logout();
    
  }
  onSubmit(){
    this.token=localStorage.getItem('token')
 // alert(this.token);
    this.authService.detail().subscribe((data1:boolean) => {
    
      if(data1){
        alert(data1);
      }
      else{
        localStorage.removeItem('token')
        this.authService.isLoggedIn=data1;
        this.router.navigate(['login']);
      }

    
    });
    
  }
 onFileChanged(event: any) {
    this.files = event.target.files[0];
  }
  
  onUpload() {
    const formData = new FormData();
    
        formData.append("photo", this.files, this.files.name);
    
    this.http.post('https://abiapp24.herokuapp.com/photo', formData).subscribe(x => console.log(x));
  }

}