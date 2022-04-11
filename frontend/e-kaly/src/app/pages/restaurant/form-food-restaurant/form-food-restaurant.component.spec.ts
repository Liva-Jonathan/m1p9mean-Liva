import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFoodRestaurantComponent } from './form-food-restaurant.component';

describe('FormFoodRestaurantComponent', () => {
  let component: FormFoodRestaurantComponent;
  let fixture: ComponentFixture<FormFoodRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFoodRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFoodRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
