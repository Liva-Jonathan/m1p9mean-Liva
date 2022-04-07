import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  nbClientOrder : number = 0;

  constructor(private http: HttpClient, private router : Router, private authService : AuthService) { 
    this.countClientOrder();
  }

  getFoods() {
    return this.http.get(BASE_URL + '/Food');
  }

  getFood(id : string) {
    return this.http.get(BASE_URL + '/Food/' + id);
  }

  evaluateOrder(orders: any[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getAuth().token
    });
    return this.http.post(BASE_URL + '/Food/evaluateOrder', orders, { headers });
  }

  countClientOrder() {
    const orders = JSON.parse(localStorage.getItem("orders"));
    this.nbClientOrder = orders ? orders.length : 0;
  }

}
