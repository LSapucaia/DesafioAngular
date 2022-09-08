import { ReactiveFormsModule } from '@angular/forms';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';


@NgModule({
  declarations: [
    DashboardComponent,
    VehicleComponent,
    VehicleDataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PoModule,
    PoTemplatesModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
