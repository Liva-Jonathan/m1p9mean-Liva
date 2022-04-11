import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListManagerComponent } from './restaurant-list-manager.component';

describe('RestaurantListManagerComponent', () => {
  let component: RestaurantListManagerComponent;
  let fixture: ComponentFixture<RestaurantListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantListManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
