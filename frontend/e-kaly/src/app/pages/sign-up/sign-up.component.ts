import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user : any = {
    name: "",
    firstname: "",
    address: "",
    email: "",
    password: ""
  };
  loading : any = { signup: false };

  constructor(private authService : AuthService, private popup : PopupService, private router : Router) { }

  ngOnInit(): void {
  }

  signup(): void {
    this.loading.signup = true;

    const onSuccess = (res : any) => {
      this.popup.success("Succès", "Vous êtes bien inscrit. Connectez-vous pour accéder à nos services.");
      this.router.navigateByUrl("/login");
    }

    const onError = (res : any) => {
      console.log("Error " + res.status + ": " + res.error.error);
      this.popup.error("Error " + res.status, res.error.error);
      this.loading.signup = false;
    }

    this.authService.signup(this.user).subscribe(onSuccess, onError);
  }

}
