import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosVehiclesComponent } from './grade-fotos-vehicles.component';

describe('GradeFotosVehiclesComponent', () => {
  let component: GradeFotosVehiclesComponent;
  let fixture: ComponentFixture<GradeFotosVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeFotosVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
