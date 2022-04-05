import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Router } from '@angular/router';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected : boolean = false;
  user : any;
  token: String = '';

  constructor(private http: HttpClient, private router : Router, private popup : PopupService) {
    if(localStorage.getItem("auth")) {
      this.isConnected = true;
    }
 
    if(this.isConnected && (!this.user || !this.token)) {
      this.setUserAuth();
    }
  }

  setUserAuth() {
    const auth = this.getAuth();
    console.log(auth);
    if(!auth) this.logout();

    const onSuccess = (res : any) => {
      this.isConnected = true;
      this.user = res.user;
      this.token = auth.token;
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
    }
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth.token
    });
    this.http.get(BASE_URL + '/auth/User/' + auth.user._id + '?type=' + auth.user.userType, { headers })
      .subscribe(onSuccess, onError);
  }

  getAuth() {
    return JSON.parse(localStorage.getItem("auth"));
  }

  login(user: any) {
    const headers = new HttpHeaders();
    return this.http.post(BASE_URL + '/auth/login', user, { headers });
  }

  logout() {
    localStorage.removeItem("auth");
    this.isConnected = false;
    this.router.navigateByUrl("/");
  }

  signup(user: any) {
    const headers = new HttpHeaders();
    return this.http.post(BASE_URL + '/auth/signup', user, { headers });
  }

}
