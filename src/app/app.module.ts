import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { DetalheVehicleService } from './vehicles/detalhe-vehicle.service';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    DashboardModule,
    FormsModule,
    PoModule,
    PoTemplatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
