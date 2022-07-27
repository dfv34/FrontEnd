import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

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
  eliminarProyecto(id?:number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el item",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      
    }).then((result) => {
      if(result.isConfirmed){
        if(id != undefined){
          this.sProyectoService.delete(id).subscribe(
            data => {
              this.cargarProyecto();
            }, err => {
              alert("No se pudo borrar el item seleccionado");
            }
          )
        }
          Swal.fire(
            'Proyecto eliminado',
            'ha sido eliminado con exito',
            'success'
          )
        }
      })
    
  }
  

}
