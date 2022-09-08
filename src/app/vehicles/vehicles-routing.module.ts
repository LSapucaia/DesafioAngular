import { ListaVehiclesComponent } from './lista-vehicles/lista-vehicles.component';
import { DetalheVehicleComponent } from './detalhe-vehicle/detalhe-vehicle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: ListaVehiclesComponent,
  },
  {
    path:'xxx',
    component: DetalheVehicleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
