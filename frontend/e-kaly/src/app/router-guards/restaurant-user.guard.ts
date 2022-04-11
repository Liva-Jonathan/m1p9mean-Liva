import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantUserGuard implements CanActivate {

  constructor(private router : Router, private authService : AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userType = this.authService.getAuth().user.userType;
    if(userType !== "Restaurant") {
      this.router.navigateByUrl(AuthService.USER_REDIRECT[userType]);
      return false;
    }
    return true;
  }
  
}
