import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FoodService } from 'src/app/services/food.service';
import { ImageService } from 'src/app/services/image.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-food-list-client',
  templateUrl: './food-list-client.component.html',
  styleUrls: ['./food-list-client.component.scss']
})
export class FoodListClientComponent implements OnInit {

  foods : any[];
  isFoodsLoading = false;

  test: string;

  constructor(private titleService : Title, public foodService : FoodService, private popup : PopupService, public imageService: ImageService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Plats");

    this.getFoods();

    this.isFoodsLoading = true;
    this.foodService.onResults().subscribe(foods => {
      this.foods = foods;
      for(let i=0; this.foods && i<this.foods.length; i++) {
        this.imageService.getImage(this.foods[i]);
      }
    });
  }

  getFoods() : void {
    const onSuccess = (res : any) => {
      this.foods = res;
      for(let i=0; i<this.foods.length; i++) {
        this.imageService.getImage(this.foods[i]);
      }
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.foodService.getFoods().subscribe(onSuccess, onError);
  }

}
