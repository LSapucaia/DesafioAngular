import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Car } from './detalhe-vehicle';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class DetalheVehicleService {

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/vehicle");
  }

}
