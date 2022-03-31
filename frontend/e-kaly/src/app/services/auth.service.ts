import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected : boolean = false;

  constructor(private http: HttpClient) { }

  login(user: any) {
    const headers = new HttpHeaders();
    return this.http.post(BASE_URL + '/auth/login', user, { headers });
  }

}
