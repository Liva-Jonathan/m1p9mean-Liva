import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { ImageService } from 'src/app/services/image.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-food-details-client',
  templateUrl: './food-details-client.component.html',
  styleUrls: ['./food-details-client.component.scss']
})
export class FoodDetailsClientComponent implements OnInit {

  isFoodLoading: boolean = false;
  food : any = {};
  quantity: number = 1;

  constructor(private titleService : Title, private route : ActivatedRoute, private router : Router, private foodService : FoodService, private popup : PopupService, private imageService : ImageService) { }

  ngOnInit(): void {
    this.getFood();
  }

  addToOrder(): void {
    if(!this.quantity) {
      this.popup.error("Commande non valide", "Veuillez remplir la quantité à commander");
      return;
    }

    let orders = JSON.parse(localStorage.getItem("orders"));
    if(!orders) orders = [];

    let toPush = true;
    for(let i=0; i<orders.length; i++) {
      if(orders[i].foodId == this.food._id) {
        orders[i].quantity += this.quantity;
        toPush = false;
      }
    }
    if(toPush) {
      orders.push({
        foodId: this.food._id,
        quantity: this.quantity
      });
    }
    
    localStorage.setItem("orders", JSON.stringify(orders));
    this.foodService.countClientOrder();

    this.popup.success("Commande enregistrée", "Cette commande a été enregistrée dans votre panier. Accédez à vos listes de commandes pour l'envoyer");
    this.router.navigateByUrl("/foods");
  }

  getFood(): void {
    this.food.isImageLoading = true;
    this.isFoodLoading = true;

    const foodId = this.route.snapshot.params['foodId'];

    const onSuccess = (res : any) => {
      this.isFoodLoading = false;
      this.food = res;
      this.titleService.setTitle("Plat Details - " + this.food.name);
      this.imageService.getImage(this.food);
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
      this.router.navigateByUrl("/foods");
    }

    this.foodService.getFood(foodId).subscribe(onSuccess, onError);
  }

}
