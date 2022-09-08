import { ListaVehiclesComponent } from './lista-vehicles/lista-vehicles.component';
import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';
import { GradeFotosVehiclesComponent } from './grade-fotos-vehicles/grade-fotos-vehicles.component';
import { DetalheVehicleComponent } from './detalhe-vehicle/detalhe-vehicle.component';


@NgModule({
  declarations: [
    ListaVehiclesComponent,
    VehicleComponent,
    GradeFotosVehiclesComponent,
    DetalheVehicleComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    CartaoModule,
  ]
})
export class VehiclesModule { }
