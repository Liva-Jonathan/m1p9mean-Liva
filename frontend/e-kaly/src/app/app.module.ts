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
import { OrderRestaurantComponent } from './restaurant/order-restaurant/order-restaurant.component';
import { FoodsDeliverDeliveryManComponent } from './deliveryMan/foods-deliver-delivery-man/foods-deliver-delivery-man.component';
import { OrderManagerComponent } from './manager/order-manager/order-manager.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
