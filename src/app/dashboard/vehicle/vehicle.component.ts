import { VehicleService } from './../vehicle.service';
import { Component, Input, OnInit } from '@angular/core';
import { VeiculosAPI } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input() x!: number;

  @Input() vehicles!: any;

  constructor(private service: VehicleService) { }

  ngOnInit() {
    this.getVehicle();
  }

  getVehicle() {
    this.service.getVehicle().subscribe((vehicles:VeiculosAPI)=>{
      console.table(vehicles.vehicles);
      this.vehicles=vehicles.vehicles;
    })
  }

}
