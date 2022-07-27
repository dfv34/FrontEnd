import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { SHysService } from 'src/app/service/s-hys.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  skills: Hys[] = [];

  constructor(private sHysService : SHysService ,private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarHys();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarHys(): void {
    this.sHysService.lista().subscribe(data => { this.skills = data; })
  }

  /*delete(id?:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la habilidad",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result: { value: any; }) => {
      if(result.value){
        this.sHysService.delete(id).subscribe(dato => {
          console.log(dato);
          this.cargarHys();
          swal(
            'Habilidad eliminada',
            'ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }*/

  delete(id?: number){
    if(id != undefined){
      this.sHysService.delete(id).subscribe(
        data => {
          this.cargarHys();
        }, err => {
          alert("No se pudo borrar el item seleccionado");
        }
      )
    }
  }


}
