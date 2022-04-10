import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeliveryManManagerComponent } from './form-delivery-man-manager.component';

describe('FormDeliveryManManagerComponent', () => {
  let component: FormDeliveryManManagerComponent;
  let fixture: ComponentFixture<FormDeliveryManManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeliveryManManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeliveryManManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
