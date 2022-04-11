import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryManListManagerComponent } from './delivery-man-list-manager.component';

describe('DeliveryManListManagerComponent', () => {
  let component: DeliveryManListManagerComponent;
  let fixture: ComponentFixture<DeliveryManListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryManListManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryManListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
