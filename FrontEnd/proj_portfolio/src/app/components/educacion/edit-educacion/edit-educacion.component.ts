import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  eduLab: Educacion = null;

  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id2 = this.activatedRouter.snapshot.params['id'];
      this.sEducacion.detail(id2).subscribe(
        data =>{
          this.eduLab = data;
          
        }, err =>{
          Swal.fire('Error al modificar educacion','error');
          this.router.navigate(['']);
        }
      )
    }
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sEducacion.update(id, this.eduLab).subscribe(
        data => {
          Swal.fire('Registro actualizado','success');
          this.router.navigate(['']);
          
        }, err =>{
          Swal.fire('Error al modificar educacion','error');
           this.router.navigate(['']);
        }
      )
    }
}
