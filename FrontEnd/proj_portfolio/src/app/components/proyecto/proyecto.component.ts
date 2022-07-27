import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proy: Proyecto[] = [];

  constructor(private sProyectoService:SProyectoService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarProyecto(): void {
    this.sProyectoService.lista().subscribe(data => { this.proy = data; })
  }
  delete(id?: number){
    if(id != undefined){
      this.sProyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el item seleccionado");
        }
      )
    }
  }
  

}
