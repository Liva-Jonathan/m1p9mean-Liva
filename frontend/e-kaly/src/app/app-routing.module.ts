import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDetailsClientComponent } from './pages/client/food-details-client/food-details-client.component';
import { FoodListClientComponent } from './pages/client/food-list-client/food-list-client.component';
import { OrdersClientComponent } from './pages/client/orders-client/orders-client.component';
import { FoodsDeliverDeliveryManComponent } from './pages/deliveryMan/foods-deliver-delivery-man/foods-deliver-delivery-man.component';
import { DeliveryManListManagerComponent } from './pages/manager/delivery-man-list-manager/delivery-man-list-manager.component';
import { FormDeliveryManManagerComponent } from './pages/manager/form-delivery-man-manager/form-delivery-man-manager.component';
import { FormRestaurantManagerComponent } from './pages/manager/form-restaurant-manager/form-restaurant-manager.component';
import { OrderManagerComponent } from './pages/manager/order-manager/order-manager.component';
import { RestaurantListManagerComponent } from './pages/manager/restaurant-list-manager/restaurant-list-manager.component';
import { FoodListRestaurantComponent } from './pages/restaurant/food-list-restaurant/food-list-restaurant.component';
import { FormFoodRestaurantComponent } from './pages/restaurant/form-food-restaurant/form-food-restaurant.component';
import { OrderRestaurantComponent } from './pages/restaurant/order-restaurant/order-restaurant.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
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
  { path: "foods/:foodId", component: FoodDetailsClientComponent, canActivate: [AuthUserGuard, ClientUserGuard] },
  { path: "orders", component: OrdersClientComponent, canActivate: [AuthUserGuard, ClientUserGuard] },

  { path: "order-restaurant", component: OrderRestaurantComponent, canActivate: [AuthUserGuard, RestaurantUserGuard] },
  { path: "foods-restaurant", component: FoodListRestaurantComponent, canActivate: [AuthUserGuard, RestaurantUserGuard] },
  { path: "new-food", component: FormFoodRestaurantComponent, canActivate: [AuthUserGuard, RestaurantUserGuard] },
  { path: "modify-food/:foodId", component: FormFoodRestaurantComponent, canActivate: [AuthUserGuard, RestaurantUserGuard] },

  { path: "delivery", component: FoodsDeliverDeliveryManComponent, canActivate: [AuthUserGuard, DeliveryManUserGuard] },
  
  { path: "order-manager", component: OrderManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
  { path: "restaurants", component: RestaurantListManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
  { path: "new-restaurant", component: FormRestaurantManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
  { path: "modify-restaurant/:restaurantId", component: FormRestaurantManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
  { path: "deliveryMan", component: DeliveryManListManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
  { path: "new-deliveryMan", component: FormDeliveryManManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
  { path: "modify-deliveryMan/:deliveryManId", component: FormDeliveryManManagerComponent, canActivate: [AuthUserGuard, ManagerUserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
