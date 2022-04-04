import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-kaly';

  constructor(public authService : AuthService, private router : Router, private location : Location) {
    if(!this.authService.isConnected && (this.location.path() != '/sign-up' && this.location.path() != '/login')) {
      this.router.navigateByUrl("/");
    }
  }

}
