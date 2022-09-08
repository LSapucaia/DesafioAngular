import { Vehicles } from './../vehicles';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-fotos-vehicles',
  templateUrl: './grade-fotos-vehicles.component.html',
  styleUrls: ['./grade-fotos-vehicles.component.css']
})
export class GradeFotosVehiclesComponent implements OnInit {

  @Input() vehicles!: Vehicles;

  constructor() { }

  ngOnInit(): void {
  }

}
