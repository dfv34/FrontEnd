import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

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
    const expe = new Educacion(this.tituloEdU, this.fechainicioEdU, this.fechafinEdU, this.descEdU, this.imagenEdU);
    this.sEducacion.save(expe).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
