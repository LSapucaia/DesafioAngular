import { VehiclesService } from './../vehicles.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Vehicles } from './../vehicles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vehicles',
  templateUrl: './lista-vehicles.component.html',
  styleUrls: ['./lista-vehicles.component.css']
})
export class ListaVehiclesComponent implements OnInit {

  vehicles!: Vehicles;

  constructor(
    private usuarioService:UsuarioService, private vehiclesService: VehiclesService,
  ) { }

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario)=>{
      const userName = usuario.name ?? '';
      this.vehiclesService.listaDoUsuario(userName).subscribe((vehicles)=>{
        this.vehicles = vehicles;
      })
    })
  }

}
