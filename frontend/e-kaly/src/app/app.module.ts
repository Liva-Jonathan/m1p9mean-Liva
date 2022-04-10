import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodListClientComponent } from './pages/client/food-list-client/food-list-client.component';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FoodDetailsClientComponent } from './pages/client/food-details-client/food-details-client.component';
import { OrdersClientComponent } from './pages/client/orders-client/orders-client.component';
import { OrderRestaurantComponent } from './pages/restaurant/order-restaurant/order-restaurant.component';
import { FoodsDeliverDeliveryManComponent } from './pages/deliveryMan/foods-deliver-delivery-man/foods-deliver-delivery-man.component';
import { OrderManagerComponent } from './pages/manager/order-manager/order-manager.component';
import { RestaurantListManagerComponent } from './pages/manager/restaurant-list-manager/restaurant-list-manager.component';
import { FormRestaurantManagerComponent } from './pages/manager/form-restaurant-manager/form-restaurant-manager.component';
import { DeliveryManListManagerComponent } from './pages/manager/delivery-man-list-manager/delivery-man-list-manager.component';
import { FormDeliveryManManagerComponent } from './pages/manager/form-delivery-man-manager/form-delivery-man-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    FoodListClientComponent,
    OrderRestaurantComponent,
    FoodsDeliverDeliveryManComponent,
    OrderManagerComponent,
    FoodDetailsClientComponent,
    OrdersClientComponent,
    RestaurantListManagerComponent,
    FormRestaurantManagerComponent,
    DeliveryManListManagerComponent,
    FormDeliveryManManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxContentLoadingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
