import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string;

  constructor(public authService : AuthService, public titleService : Title, public router: Router, public foodService: FoodService) { }

  ngOnInit(): void {
  }

  searchFood() {
    this.foodService.search(this.search);
  }

}
