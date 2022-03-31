import { AfterViewInit, Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements AfterViewInit {

  user : any = { email: "peter@gmail.com", password: "peter" };
  loading : any = { login: false };

  constructor(private authService : AuthService, private popup : PopupService) { }

  ngAfterViewInit(): void {
    console.log(this.authService.isConnected);
  }

  login() {
    this.loading.login = true;

    const onSuccess = (res : any) => {
      console.log(res);
      localStorage.setItem("token", res.token);
      this.authService.isConnected = true;
    }

    const onError = (res : any) => {
      console.log(res);
      console.log("Error " + res.status + ": " + res.error.error);
      this.popup.error("Error " + res.status, res.error.error);
      this.loading.login = false;
    }

    this.authService.login(this.user).subscribe(onSuccess, onError);
  }

  // ngOnInit(): void {
  // }

}

