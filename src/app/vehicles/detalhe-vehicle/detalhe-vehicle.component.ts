import { DetalheVehicleService } from './../detalhe-vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../detalhe-vehicle';

@Component({
  selector: 'app-detalhe-vehicle',
  templateUrl: './detalhe-vehicle.component.html',
  styleUrls: ['./detalhe-vehicle.component.css']
})
export class DetalheVehicleComponent implements OnInit {

  carros: Array<any> = new Array()

  constructor(private detalheVehicleServie: DetalheVehicleService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.detalheVehicleServie.getCars().subscribe(carros => {
    }, err => {
      console.log(err);
    }
    );
  }

}
