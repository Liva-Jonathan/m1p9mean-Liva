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

  constructor(public authService : AuthService, private router : Router) {
    if(!this.authService.isConnected) {
      this.router.navigateByUrl("/");
    }
  }

}
