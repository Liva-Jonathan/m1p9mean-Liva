import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { ImageService } from 'src/app/services/image.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-form-food-restaurant',
  templateUrl: './form-food-restaurant.component.html',
  styleUrls: ['./form-food-restaurant.component.scss']
})
export class FormFoodRestaurantComponent implements OnInit {

  isPageModify: boolean = false;

  name: string = "";
  price: number;
  image: string = "";
  description: string = "";

  file: File;

  isFoodCreating: boolean = false;
  isFoodLoading: boolean = false;
  isFoodUpdating: boolean = false;

  constructor(private titleService: Title, private foodService: FoodService, private popup: PopupService,
    private router: Router, private route: ActivatedRoute, private imageService: ImageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Formulaire Plat");

    if(this.router.url.split('/')[1] == "modify-food") {
      this.isPageModify = true;
      this.getFood();
    }
  }

  createFood() {
    if(!this.inputValid()) return;
    
    this.isFoodCreating = true;

    const food = {
      name: this.name,
      price: this.price,
      imageFile: this.file,
      description: this.description,
      idRestaurant: this.authService.getUser()._id
    }

    const onSuccess = (res : any) => {
      this.isFoodCreating = false;
      this.popup.success("Plat créé", " ");
      this.router.navigateByUrl('/foods-restaurant');
    }

    const onError = (res : any) => {
      this.isFoodCreating = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.foodService.createFood(food).subscribe(onSuccess, onError);
  }

  inputValid(): boolean {
    if(this.name == '' || this.price == null || this.file == null || this.description == '') {
      this.popup.error("Erreur", "Veuillez remplir tous les champs");
      return false;
    }
    return true;
  }

  getFood() {
    this.isFoodLoading = true;

    const onSuccess = (res : any) => {
      this.isFoodLoading = false;

      this.name = res.name;
      this.price = res.price;
      this.image = res.image;
      this.description = res.description;
    }

    const onError = (res : any) => {
      this.isFoodLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
      this.router.navigateByUrl('/foods-restaurant');
    }

    this.foodService.getFood(this.route.snapshot.params['foodId']).subscribe(onSuccess, onError);
  }

  updateFood() {
    if(!this.inputValid()) return;
    
    this.isFoodUpdating = true;

    const food = {
      name: this.name,
      price: this.price,
      imageFile: this.file,
      description: this.description
    }

    const onSuccess = (res : any) => {
      this.isFoodUpdating = false;
      this.popup.success("Plat modifié", " ");
      this.router.navigateByUrl('/foods-restaurant');
    }

    const onError = (res : any) => {
      this.isFoodUpdating = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.foodService.updateFood(this.route.snapshot.params['foodId'], food).subscribe(onSuccess, onError);
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
        this.file = file;
    }
}

}
