import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodsDeliverDeliveryManComponent } from './deliveryMan/foods-deliver-delivery-man/foods-deliver-delivery-man.component';
import { OrderManagerComponent } from './manager/order-manager/order-manager.component';
import { FoodListClientComponent } from './pages/client/food-list-client/food-list-client.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { OrderRestaurantComponent } from './restaurant/order-restaurant/order-restaurant.component';
import { AuthUserGuard } from './router-guards/auth-user.guard';
import { ClientUserGuard } from './router-guards/client-user.guard';
import { DeliveryManUserGuard } from './router-guards/delivery-man-user.guard';
import { ManagerUserGuard } from './router-guards/manager-user.guard';
import { NotAuthUserGuard } from './router-guards/not-auth-user.guard';
import { RestaurantUserGuard } from './router-guards/restaurant-user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: SignInComponent, canActivate: [NotAuthUserGuard] },
  { path: "sign-up", component: SignUpComponent, canActivate: [NotAuthUserGuard] },
  { path: "foods", component: FoodListClientComponent, canActivate: [AuthUserGuard, ClientUserGuard] },
  { path: "order-restaurant", component: OrderRestaurantComponent, canActivate: [AuthUserGuard, RestaurantUserGuard] },
  { path: "delivery", component: FoodsDeliverDeliveryManComponent, canActivate: [AuthUserGuard, DeliveryManUserGuard] },
  { path: "order-manager", component: OrderManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
