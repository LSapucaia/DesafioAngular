import { TestBed } from '@angular/core/testing';

import { DetalheVehicleService } from './detalhe-vehicle.service';

describe('DetalheVehicleService', () => {
  let service: DetalheVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalheVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
