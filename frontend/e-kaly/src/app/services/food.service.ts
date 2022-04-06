import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private router : Router) { }

  getFoods() {
    return this.http.get(BASE_URL + '/Food');
  }

  getFood(id : string) {
    return this.http.get(BASE_URL + '/Food/' + id);
  }

}
