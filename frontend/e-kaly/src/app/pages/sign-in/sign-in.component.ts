import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user : any = { email: "peter@gmail.com", password: "peter" };

  loading : any = { login: false };

  error : String = "";

  constructor(private authService : AuthService, private popup : PopupService, private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loading.login = true;

    const onSuccess = (res : any) => {
      console.log(res);

      const auth = {
        user: res.user,
        token: res.token
      };
      localStorage.setItem("auth", JSON.stringify(auth));

      this.authService.isConnected = true;
      this.authService.user = res.user;
      this.authService.token = res.token;

      this.router.navigateByUrl(AuthService.USER_REDIRECT[auth.user.userType]).then(() => { window.location.reload() });
    }

    const onError = (res : any) => {
      console.log(res);
      console.log("Error " + res.status + ": " + res.error.error);
      this.error = res.error.error;
      this.loading.login = false;
    }

    this.authService.login(this.user).subscribe(onSuccess, onError);
  }

}

