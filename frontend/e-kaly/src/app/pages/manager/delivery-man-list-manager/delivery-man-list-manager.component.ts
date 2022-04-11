import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DeliveryManService } from 'src/app/services/delivery-man.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-delivery-man-list-manager',
  templateUrl: './delivery-man-list-manager.component.html',
  styleUrls: ['./delivery-man-list-manager.component.scss']
})
export class DeliveryManListManagerComponent implements OnInit {

  deliveryMen: any[];

  isDeliveryMenLoading: boolean = false;

  constructor(public titleService: Title, private deliveryManService: DeliveryManService, private popup: PopupService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Liste des livreurs");

    this.getDeliveryMen();
  }

  getDeliveryMen() {
    this.isDeliveryMenLoading = true;

    const onSuccess = (res : any) => {
      this.isDeliveryMenLoading = false;
      this.deliveryMen = res;
    }

    const onError = (res : any) => {
      this.isDeliveryMenLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.deliveryManService.getAllDeliveryMan().subscribe(onSuccess, onError);
  }

  deleteDeliveryMan(id: string) {
    const onSuccess = (res : any) => {
      this.popup.success("Livreur supprimé", " ");
      this.getDeliveryMen();
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.deliveryManService.deleteDeliveryMan(id).subscribe(onSuccess, onError);
  }

}
