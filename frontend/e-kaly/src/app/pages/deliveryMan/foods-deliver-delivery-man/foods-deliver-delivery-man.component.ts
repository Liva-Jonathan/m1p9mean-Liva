import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { OrderService } from 'src/app/services/order.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-foods-deliver-delivery-man',
  templateUrl: './foods-deliver-delivery-man.component.html',
  styleUrls: ['./foods-deliver-delivery-man.component.scss']
})
export class FoodsDeliverDeliveryManComponent implements OnInit {

  ordersReady: any[];
  ordersDelivered: any[];
  isOrdersReadyLoading: boolean = false;
  isOrdersDeliveredLoading: boolean = false;

  constructor(private orderService: OrderService, private popup: PopupService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getOrdersReady();
    this.getOrdersDelivered();
  }

  getOrdersReady() {
    this.isOrdersReadyLoading = true;

    const onSuccess = (res : any) => {
      this.isOrdersReadyLoading = false;
      this.ordersReady = res;
      for(let i=0; i<this.ordersReady.length; i++) {
        this.imageService.getImage(this.ordersReady[i].food);
      }
    }

    const onError = (res : any) => {
      this.isOrdersReadyLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.orderService.getReadyOrdersDeliveryMan().subscribe(onSuccess, onError);
  }

  getOrdersDelivered() {
    this.isOrdersDeliveredLoading = true;

    const onSuccess = (res : any) => {
      this.isOrdersDeliveredLoading = false;
      this.ordersDelivered = res;
      console.log(this.ordersDelivered);
      for(let i=0; i<this.ordersDelivered.length; i++) {
        this.imageService.getImage(this.ordersDelivered[i].food);
      }
    }

    const onError = (res : any) => {
      this.isOrdersDeliveredLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.orderService.getDeliveredOrdersDeliveryMan().subscribe(onSuccess, onError);
  }

  changeOrderStatus(event, status) {
    if(event.previousContainer === event.container) {
      return;
    }

    const order = event.container.data[event.currentIndex];

    const onSuccess = (res : any) => {
      this.getOrdersReady();
      this.getOrdersDelivered();
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.orderService.updateOrderDetails(order._id, status).subscribe(onSuccess, onError);
  }

  orderToDelivered(event) {
    const status = { status: "delivered" };
    this.changeOrderStatus(event, status);
  }

  orderToReady(event) {
    const status = { status: "ready" };
    this.changeOrderStatus(event, status);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
