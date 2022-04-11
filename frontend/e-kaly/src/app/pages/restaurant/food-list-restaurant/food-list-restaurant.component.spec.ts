import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListRestaurantComponent } from './food-list-restaurant.component';

describe('FoodListRestaurantComponent', () => {
  let component: FoodListRestaurantComponent;
  let fixture: ComponentFixture<FoodListRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
