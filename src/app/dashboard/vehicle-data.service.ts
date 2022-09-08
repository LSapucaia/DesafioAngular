import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleData, VehiclesData, VehiclesDataAPI } from './vehicle-data';
import {map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  private url='http://localhost:3000/vehicleData'

  constructor(private httpClient:HttpClient, private tokenService:TokenService) {}

  getVehicleData(valor?:string) {
    const params = valor ? new HttpParams().append('valor',valor) : undefined;
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.httpClient.get<VehiclesDataAPI>(this.url,{
      headers, params,
    }).pipe(
      tap((valor)=>console.log(valor)),
      map((api)=>api.vehicleData),
      map((vehiclesData)=>vehiclesData.sort((vehicleDataA:VehicleData,vehicleDataB:VehicleData)=>this.ordenaPorCodigo(vehicleDataA,vehicleDataB))));
  }

  private ordenaPorCodigo(vehicleDataA:VehicleData,vehicleDataB:VehicleData){
    if(vehicleDataA.id>vehicleDataB.id){
      return 1;
    }
    if(vehicleDataA.id<vehicleDataB.id){
      return -1;
    }
    return 0;
  }

}
