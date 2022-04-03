import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected : boolean = false;
  user : any;

  constructor(private http: HttpClient, private router : Router) {
    if(localStorage.getItem("token")) {
      this.isConnected = true;
    }
 
  }

  login(user: any) {
    const headers = new HttpHeaders();
    return this.http.post(BASE_URL + '/auth/login', user, { headers });
  }

  logout() {
    localStorage.removeItem("token");
    this.isConnected = false;
    this.router.navigateByUrl("/");
  }

  signup(user: any) {
    const headers = new HttpHeaders();
    return this.http.post(BASE_URL + '/auth/signup', user, { headers });
  }

}
