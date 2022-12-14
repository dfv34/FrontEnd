import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }
  eliminarExperiencia(id?:number){
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
          this.sExperiencia.delete(id).subscribe(
            data => {
              this.cargarExperiencia();
            }, err => {
              alert("No se pudo borrar el item seleccionado");
            }
          )
        }
          Swal.fire(
            'La Experiencia',
            'ha sido eliminado con exito',
            'success'
          )
        }
      })
    
  }

}
