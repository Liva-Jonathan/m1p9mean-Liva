import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryManService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllDeliveryMan() {
    return this.http.get(BASE_URL + '/DeliveryMan', { headers: this.authService.createHeaders() });
  }

  getOneDeliveryMan(id: string) {
    return this.http.get(BASE_URL + '/DeliveryMan/' + id, { headers: this.authService.createHeaders() });
  }

  createDeliveryMan(deliveryMan: any) {
    return this.http.post(BASE_URL + '/DeliveryMan', deliveryMan, { headers: this.authService.createHeaders() });
  }

  updateDeliveryMan(id: string, deliveryMan: any) {
    return this.http.put(BASE_URL + '/DeliveryMan/' + id, deliveryMan, { headers: this.authService.createHeaders() });
  }

  deleteDeliveryMan(id: string) {
    return this.http.delete(BASE_URL + '/DeliveryMan/' + id, { headers: this.authService.createHeaders() });
  }
  
}
