import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educ: Educacion[] = [];

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => { this.educ = data; })
  }
  eliminarEducacion(id?:number){
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
          this.educacionService.delete(id).subscribe(
            data => {
              this.cargarEducacion();
            }, err => {
              alert("No se pudo borrar el item seleccionado");
            }
          )
        }
          Swal.fire(
            'La Educacion',
            'ha sido eliminado con exito',
            'success'
          )
        }
      })
    
  }
  

}
