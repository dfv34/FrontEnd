import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyLab: Proyecto = null;

  constructor(private sProyectoService: SProyectoService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectoService.detail(id).subscribe(
      data =>{
        this.proyLab = data;
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )

  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectoService.update(id, this.proyLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar el proyecto");
         this.router.navigate(['']);
      }
    )
  }

}
