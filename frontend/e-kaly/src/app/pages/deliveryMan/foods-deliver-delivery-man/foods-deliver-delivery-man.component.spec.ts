import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsDeliverDeliveryManComponent } from './foods-deliver-delivery-man.component';

describe('FoodsDeliverDeliveryManComponent', () => {
  let component: FoodsDeliverDeliveryManComponent;
  let fixture: ComponentFixture<FoodsDeliverDeliveryManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsDeliverDeliveryManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsDeliverDeliveryManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
