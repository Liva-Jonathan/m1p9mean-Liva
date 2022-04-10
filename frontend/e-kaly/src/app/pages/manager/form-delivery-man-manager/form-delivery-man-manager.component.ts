import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryManService } from 'src/app/services/delivery-man.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-form-delivery-man-manager',
  templateUrl: './form-delivery-man-manager.component.html',
  styleUrls: ['./form-delivery-man-manager.component.scss']
})
export class FormDeliveryManManagerComponent implements OnInit {

  isPageModify: boolean = false;

  name: string = "";
  firstname: string = "";
  email: string = "";
  password: string = "";

  isDeliveryManCreating: boolean = false;
  isDeliveryManLoading: boolean = false;
  isDeliveryManUpdating: boolean = false;

  constructor(private titleService: Title, private deliveryManService: DeliveryManService, private popup: PopupService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle("Formulaire Livreur");

    if(this.router.url.split('/')[1] == "modify-deliveryMan") {
      this.isPageModify = true;
      this.getDeliveryMan();
    }
  }

  createDeliveryMan() {
    if(!this.inputValid()) return;
    
    this.isDeliveryManCreating = true;

    const deliveryMan = {
      name: this.name,
      firstname: this.firstname,
      email: this.email,
      password: this.password
    }

    const onSuccess = (res : any) => {
      this.isDeliveryManCreating = false;
      this.popup.success("Livreur créé", " ");
      this.router.navigateByUrl('/deliveryMan');
    }

    const onError = (res : any) => {
      this.isDeliveryManCreating = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.deliveryManService.createDeliveryMan(deliveryMan).subscribe(onSuccess, onError);
  }

  inputValid(): boolean {
    if(this.name == '' || this.firstname == '' || this.email == '' || this.password == '') {
      this.popup.error("Erreur", "Veuillez remplir tous les champs");
      return false;
    }
    return true;
  }

  getDeliveryMan() {
    this.isDeliveryManLoading = true;

    const onSuccess = (res : any) => {
      this.isDeliveryManLoading = false;

      this.name = res.name;
      this.firstname = res.firstname;
      this.email = res.email;
    }

    const onError = (res : any) => {
      this.isDeliveryManLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
      this.router.navigateByUrl('/deliveryMan');
    }

    this.deliveryManService.getOneDeliveryMan(this.route.snapshot.params['deliveryManId']).subscribe(onSuccess, onError);
  }

  updateDeliveryMan() {
    this.password = "none";
    if(!this.inputValid()) return;
    
    this.isDeliveryManUpdating = true;

    const deliveryMan = {
      name: this.name,
      firstname: this.firstname,
      email: this.email
    }

    const onSuccess = (res : any) => {
      this.isDeliveryManUpdating = false;
      this.popup.success("Livreur modifié", " ");
      this.router.navigateByUrl('/deliveryMan');
    }

    const onError = (res : any) => {
      this.isDeliveryManUpdating = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.deliveryManService.updateDeliveryMan(this.route.snapshot.params['deliveryManId'], deliveryMan).subscribe(onSuccess, onError);
  }

}
