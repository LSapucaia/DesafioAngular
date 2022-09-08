import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVehicleComponent } from './detalhe-vehicle.component';

describe('DetalheVehicleComponent', () => {
  let component: DetalheVehicleComponent;
  let fixture: ComponentFixture<DetalheVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
