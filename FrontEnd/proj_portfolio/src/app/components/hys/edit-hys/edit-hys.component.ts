import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { SHysService } from 'src/app/service/s-hys.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {
  hysLab: Hys = null;
  constructor(private sHysService : SHysService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHysService.detail(id).subscribe(
        data =>{
          Swal.fire('Registro actualizado','success');
          this.hysLab = data;
        }, err =>{
          Swal.fire('Error al modificar la habilidad','error');
          
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHysService.update(id, this.hysLab).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
          Swal.fire('Error al modificar la habilidad','error');
           this.router.navigate(['']);
        }
      )
    }

}
