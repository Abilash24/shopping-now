import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';

import { tap, delay } from 'rxjs/operators';
import { Observable,of,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
jData:string;
token:string;
constructor(private http:HttpClient){}
 
  register(data:any): Observable<any> {
   
    this.jData=JSON.stringify(data);
   
 let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>('https://abiapp24.herokuapp.com',this.jData,{headers: headers}).pipe(
      
    );
 
  }
   login(data:any): Observable<any> {
    
    this.jData=JSON.stringify(data);
     
   let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
 
  return this.http.post<any>('https://abiapp24.herokuapp.com/login',this.jData,{headers: headers});
  
 
  }
  detail(): Observable<boolean> {
this.token=localStorage.getItem('token')
    const httpOptions = {
  headers: new HttpHeaders({
    'authorization': this.token,'content-type':  'application/json'
  })
};

  
 return this.http.get<boolean>('https://abiapp24.herokuapp.com/home',
      httpOptions);
  
 
  }
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token')
  }
}