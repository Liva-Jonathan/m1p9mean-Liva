import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRestaurantManagerComponent } from './form-restaurant-manager.component';

describe('FormRestaurantManagerComponent', () => {
  let component: FormRestaurantManagerComponent;
  let fixture: ComponentFixture<FormRestaurantManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRestaurantManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRestaurantManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
