import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userType: string;

  constructor(public router : Router, public foodService : FoodService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userType = this.authService.getAuth().user.userType;
  }

}
