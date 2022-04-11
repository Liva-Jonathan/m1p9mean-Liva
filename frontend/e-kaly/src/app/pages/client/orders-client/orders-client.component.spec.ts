import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersClientComponent } from './orders-client.component';

describe('OrdersClientComponent', () => {
  let component: OrdersClientComponent;
  let fixture: ComponentFixture<OrdersClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
