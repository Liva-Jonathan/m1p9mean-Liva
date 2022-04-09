import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { PopupService } from 'src/app/services/popup.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-order-restaurant',
  templateUrl: './order-restaurant.component.html',
  styleUrls: ['./order-restaurant.component.scss']
})
export class OrderRestaurantComponent implements OnInit {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  ordersInProgress: any[];
  ordersReady: any[];
  isOrdersInProgressLoading: boolean = false;
  isOrdersReadyLoading: boolean = false;  

  constructor(private orderService: OrderService, private popup: PopupService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getOrdersInProgress();
    this.getReadyOrdersInProgress();
  }

  getOrdersInProgress() {
    this.isOrdersInProgressLoading = true;

    const onSuccess = (res : any) => {
      this.isOrdersInProgressLoading = false;
      this.ordersInProgress = res;
      for(let i=0; i<this.ordersInProgress.length; i++) {
        this.imageService.getImage(this.ordersInProgress[i].food);
      }
    }

    const onError = (res : any) => {
      this.isOrdersInProgressLoading = false;
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.orderService.getOrderRestaurant().subscribe(onSuccess, onError);
  }

  getReadyOrdersInProgress() {
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

    this.orderService.getReadyOrderRestaurant().subscribe(onSuccess, onError);
  }

  changeOrderStatus(event, status) {
    if(event.previousContainer === event.container) {
      return;
    }

    const order = event.container.data[event.currentIndex];

    const onSuccess = (res : any) => {
      this.getOrdersInProgress();
      this.getReadyOrdersInProgress();
    }

    const onError = (res : any) => {
      this.popup.error("Error " + res.status, res.error.error);
    }

    this.orderService.updateOrderDetails(order._id, status).subscribe(onSuccess, onError);
  }

  orderToReady(event) {
    const status = { status: "ready" };
    this.changeOrderStatus(event, status);
  }

  orderToInProgress(event) {
    const status = { status: "in progress" };
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
