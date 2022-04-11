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

  getFoodsRestaurant(restaurantId: string) {
    return this.http.get(BASE_URL + '/Restaurant/' + restaurantId + '/Food', { headers: this.authService.createHeaders() });
  }

  createFood(food: any) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken()
    });

    const formData: FormData = new FormData();
    formData.append('name', food.name);
    formData.append('price', food.price);
    formData.append('image', food.imageFile);
    formData.append('description', food.description);
    formData.append('idRestaurant', food.idRestaurant);
    return this.http.post(BASE_URL + '/Food', formData, { headers: headers });
  }

  updateFood(id: string, food: any) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.getToken()
    });

    const formData: FormData = new FormData();
    formData.append('name', food.name);
    formData.append('price', food.price);
    formData.append('image', food.imageFile);
    formData.append('description', food.description);
    return this.http.put(BASE_URL + '/Food/' + id, formData, { headers: headers });
  }

  deleteFood(id: string) {
    return this.http.delete(BASE_URL + '/Food/' + id, { headers: this.authService.createHeaders() });
  }

}
