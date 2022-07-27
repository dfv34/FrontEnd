import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

    nombrePro: string = '';
    fechaPro: number = 0;
    descPro: string = '';
    imagenPro: string = '';

  constructor(private sProyectoService: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proj = new Proyecto(this.nombrePro, this.fechaPro, this.descPro, this.imagenPro);
    this.sProyectoService.save(proj).subscribe(
      data => {
        Swal.fire('Proyecto añadido','Ok!');
        
        this.router.navigate(['']);
      }, err => {
        Swal.fire('Error al añadir el proyecto','ERROR!');
        this.router.navigate(['']);
      }
    )
  }

}
