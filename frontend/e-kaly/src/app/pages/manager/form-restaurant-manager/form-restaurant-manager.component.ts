import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from 'src/app/services/popup.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-form-restaurant-manager',
  templateUrl: './form-restaurant-manager.component.html',
  styleUrls: ['./form-restaurant-manager.component.scss']
})
export class FormRestaurantManagerComponent implements OnInit {

  isPageModify: boolean = false;

  name: string = "";
  address: string = "";
  email: string = "";
  password: string = "";

  isRestaurantCreating: boolean = false;
  isRestaurantLoading: boolean = false;
  isRestaurantUpdating: boolean = false;

  constructor(private titleService: Title, private restaurantService: RestaurantService, private popup: PopupService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle("Formulaire Restaurant");

    if(this.router.url.split('/')[1] == "modify-restaurant") {
      this.isPageModify = true;
      this.getRestaurant();
    }
  }

  createRestaurant() {
    if(!this.inputValid()) return;
    
    this.isRestaurantCreating = true;

    const restaurant = {
      name: this.name,
      address: this.address,
      email: this.email,
      password: this.password
    }

    const onSuccess = (res : any) => {
      this.isRestaurantCreating = false;
      this.popup.success("Restaurant créé", " ");
      this.router.navigateByUrl('/restaurants');
    }

    const onError = (res : any) => {
      this.isRestaurantCreating = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.restaurantService.createRestaurant(restaurant).subscribe(onSuccess, onError);
  }

  inputValid(): boolean {
    if(this.name == '' || this.address == '' || this.email == '' || this.password == '') {
      this.popup.error("Erreur", "Veuillez remplir tous les champs");
      return false;
    }
    return true;
  }

  getRestaurant() {
    this.isRestaurantLoading = true;

    const onSuccess = (res : any) => {
      this.isRestaurantLoading = false;

      this.name = res.name;
      this.address = res.address;
      this.email = res.email;
    }

    const onError = (res : any) => {
      this.isRestaurantLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
      this.router.navigateByUrl('/restaurants');
    }

    this.restaurantService.getOneRestaurant(this.route.snapshot.params['restaurantId']).subscribe(onSuccess, onError);
  }

  updateRestaurant() {
    this.password = "none";
    if(!this.inputValid()) return;
    
    this.isRestaurantUpdating = true;

    const restaurant = {
      name: this.name,
      address: this.address,
      email: this.email
    }

    const onSuccess = (res : any) => {
      this.isRestaurantUpdating = false;
      this.popup.success("Restaurant modifié", " ");
      this.router.navigateByUrl('/restaurants');
    }

    const onError = (res : any) => {
      this.isRestaurantUpdating = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.restaurantService.updateRestaurant(this.route.snapshot.params['restaurantId'], restaurant).subscribe(onSuccess, onError);
  }

}
