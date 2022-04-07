import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { ImageService } from 'src/app/services/image.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-orders-client',
  templateUrl: './orders-client.component.html',
  styleUrls: ['./orders-client.component.scss']
})
export class OrdersClientComponent implements OnInit {

  orders: any;
  isLoading: boolean = false;

  constructor(private titleService : Title, private foodService : FoodService, private popup : PopupService, private router : Router, private authService : AuthService, private imageService : ImageService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Mes commandes");

    this.getOrders();
  }

  getOrders(): void {
    this.isLoading = true;

    const orders = JSON.parse(localStorage.getItem("orders"));
    if(!orders) {
      this.popup.error("No orders", "Vous n'avez pas de commandes pour l'instant");
      this.router.navigateByUrl('/foods');
      return;
    }

    const onSuccess = (res : any) => {
      this.orders = res;
      this.isLoading = false;
      for(let i=0; i<this.orders.foods.length; i++) {
        this.imageService.getImage(this.orders.foods[i]);
      }
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
      this.router.navigateByUrl("/foods");
    }

    this.foodService.evaluateOrder(orders).subscribe(onSuccess, onError);
  }

  deleteAllOrders() {
    localStorage.removeItem("orders");
    this.foodService.countClientOrder();
    this.router.navigateByUrl('/foods');
  }

}
