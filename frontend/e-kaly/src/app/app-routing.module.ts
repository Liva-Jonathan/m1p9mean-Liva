import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListClientComponent } from './pages/client/food-list-client/food-list-client.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "foods", component: FoodListClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
