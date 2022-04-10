import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PopupService } from 'src/app/services/popup.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list-manager',
  templateUrl: './restaurant-list-manager.component.html',
  styleUrls: ['./restaurant-list-manager.component.scss']
})
export class RestaurantListManagerComponent implements OnInit {

  restaurants: any[];

  isRestaurantsLoading: boolean = false;

  constructor(public titleService: Title, private restaurantService: RestaurantService, private popup: PopupService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Liste des restaurants");

    this.getRestaurants();
  }

  getRestaurants() {
    this.isRestaurantsLoading = true;

    const onSuccess = (res : any) => {
      this.isRestaurantsLoading = false;
      this.restaurants = res;
    }

    const onError = (res : any) => {
      this.isRestaurantsLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.restaurantService.getAllRestaurants().subscribe(onSuccess, onError);
  }

  deleteRestaurant(id: string) {
    const onSuccess = (res : any) => {
      this.popup.success("Restaurant supprimé", " ");
      this.getRestaurants();
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.restaurantService.deleteRestaurant(id).subscribe(onSuccess, onError);
  }

}
