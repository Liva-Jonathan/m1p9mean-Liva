import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';
import { OrderService } from 'src/app/services/order.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.scss']
})
export class OrderManagerComponent implements OnInit {

  orders: any[];
  orderInfo: any;

  isOrdersLoading: boolean = false;
  isOrderInfoLoading: boolean = false;

  orderIdActive: string;

  constructor(private popup: PopupService, private orderService: OrderService, private imageService: ImageService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Commandes E-Kaly");
    this.getOrders();
  }

  getOrders() {
    this.isOrdersLoading = true;
    this.isOrderInfoLoading = true;

    const onSuccess = (res : any) => {
      this.isOrdersLoading = false;
      this.orders = res;
      if(!this.orderInfo && this.orders[0]) {
        this.getOrderInfo(this.orders[0]._id);
      }
    }

    const onError = (res : any) => {
      this.isOrdersLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.orderService.getAllOrders().subscribe(onSuccess, onError);
  }

  getOrderInfo(orderId: string) {
    this.isOrderInfoLoading = true;
    this.orderIdActive = orderId;

    const onSuccess = (res : any) => {
      this.isOrderInfoLoading = false;
      this.orderInfo = res;
      for(let i=0; i<this.orderInfo.orderDetails.length; i++) {
        this.imageService.getImage(this.orderInfo.orderDetails[i].food);
      }
    }

    const onError = (res : any) => {
      this.isOrderInfoLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.orderService.getOrderInfo(orderId).subscribe(onSuccess, onError);
  }

}
