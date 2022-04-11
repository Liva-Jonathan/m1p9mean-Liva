import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllRestaurants() {
    return this.http.get(BASE_URL + '/Restaurant', { headers: this.authService.createHeaders() });
  }

  getOneRestaurant(id: string) {
    return this.http.get(BASE_URL + '/Restaurant/' + id, { headers: this.authService.createHeaders() });
  }

  createRestaurant(restaurant: any) {
    return this.http.post(BASE_URL + '/Restaurant', restaurant, { headers: this.authService.createHeaders() });
  }

  updateRestaurant(id: string, restaurant: any) {
    return this.http.put(BASE_URL + '/Restaurant/' + id, restaurant, { headers: this.authService.createHeaders() });
  }

  deleteRestaurant(id: string) {
    return this.http.delete(BASE_URL + '/Restaurant/' + id, { headers: this.authService.createHeaders() });
  }

}
