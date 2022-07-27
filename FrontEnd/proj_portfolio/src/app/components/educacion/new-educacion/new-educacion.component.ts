import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  
    tituloEdU: string = '';
    fechainicioEdU: number = 0;
    fechafinEdU: number = 0;
    descEdU: string = '';
    imagenEdU: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Educacion(this.tituloEdU, this.fechainicioEdU, this.fechafinEdU, this.descEdU, this.imagenEdU);
    this.sEducacion.save(educ).subscribe(
      data => {
        Swal.fire('Educacion Añadida','Ok!');
        this.router.navigate(['']);
      }, err => {
        Swal.fire('Error al añadir la Educación','ERROR!');
        this.router.navigate(['']);
      }
    )
  }

}
