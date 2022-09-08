import { VeiculosAPI } from './vehicle';
import { TokenService } from './../autenticacao/token.service';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private url='http://localhost:3000/vehicle'

  constructor(private httpClient:HttpClient, private tokenService:TokenService) {}

  getVehicle(): Observable<VeiculosAPI> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.httpClient.get<VeiculosAPI>(this.url, {
      headers,
    })
  }

}
