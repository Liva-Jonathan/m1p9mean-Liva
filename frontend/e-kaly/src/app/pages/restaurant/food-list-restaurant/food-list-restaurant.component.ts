import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { ImageService } from 'src/app/services/image.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-food-list-restaurant',
  templateUrl: './food-list-restaurant.component.html',
  styleUrls: ['./food-list-restaurant.component.scss']
})
export class FoodListRestaurantComponent implements OnInit {

  foods: any[];

  isFoodsLoading: boolean = false;

  constructor(public titleService: Title, private foodService: FoodService, private popup: PopupService,
    private authService: AuthService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Liste des Plats");

    this.getFoods();
  }

  getFoods() {
    this.isFoodsLoading = true;

    const onSuccess = (res : any) => {
      this.isFoodsLoading = false;
      this.foods = res;
      for(let i=0; i<this.foods.length; i++) {
        this.imageService.getImage(this.foods[i]);
      }
    }

    const onError = (res : any) => {
      this.isFoodsLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.foodService.getFoodsRestaurant(this.authService.getUser()._id).subscribe(onSuccess, onError);
  }

  deleteFood(id: string) {
    const onSuccess = (res : any) => {
      this.popup.success("Plat supprimé", " ");
      this.getFoods();
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.foodService.deleteFood(id).subscribe(onSuccess, onError);
  }

}
