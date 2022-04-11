import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsClientComponent } from './food-details-client.component';

describe('FoodDetailsClientComponent', () => {
  let component: FoodDetailsClientComponent;
  let fixture: ComponentFixture<FoodDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDetailsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
