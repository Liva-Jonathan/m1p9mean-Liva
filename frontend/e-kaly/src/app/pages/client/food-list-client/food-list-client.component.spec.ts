import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListClientComponent } from './food-list-client.component';

describe('FoodListClientComponent', () => {
  let component: FoodListClientComponent;
  let fixture: ComponentFixture<FoodListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodListClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
