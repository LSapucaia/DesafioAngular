import { switchMap, tap } from 'rxjs/operators';
import { VehicleData, VehiclesData, VehiclesDataAPI } from './../vehicle-data';
import { Component, Input, OnInit } from '@angular/core';
import { VehicleDataService } from '../vehicle-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css']
})
export class VehicleDataComponent {

  vehicleDataInput = new FormControl();

  vehiclesData$ = this.vehicleDataInput.valueChanges.pipe(
    tap(console.log),
    switchMap((valorDigitado)=>this.service.getVehicleData(valorDigitado)),
    tap(console.log),
  );

  constructor(private service: VehicleDataService) { }

}
