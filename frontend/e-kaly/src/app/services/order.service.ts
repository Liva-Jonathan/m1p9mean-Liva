import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  sendOrders(orders) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.post(BASE_URL + '/Order', orders, { headers });
  }

  getOrderRestaurant() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(BASE_URL + '/Order/Restaurant/' + this.authService.getUser()._id, { headers });
  }

  getReadyOrderRestaurant() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(BASE_URL + '/Order/ready/Restaurant/' + this.authService.getUser()._id, { headers });
  }

  updateOrderDetails(id: string, body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });

    let params = '';
    if(body.status && body.status == "delivered") {
      params = '?deliveryMan=' + this.authService.getUser()._id;
    }

    return this.http.put(BASE_URL + '/Order/OrderDetails/' + id + params, body, { headers });
  }

  getReadyOrdersDeliveryMan() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(BASE_URL + '/Order/ready', { headers });
  }

  getDeliveredOrdersDeliveryMan() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(BASE_URL + '/Order/delivered/DeliveryMan/' + this.authService.getUser()._id, { headers });
  }

  getAllOrders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(BASE_URL + '/Order', { headers });
  }

  getOrderInfo(orderId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    });
    return this.http.get(BASE_URL + '/Order/' + orderId + '/OrderDetails', { headers });
  }

}
