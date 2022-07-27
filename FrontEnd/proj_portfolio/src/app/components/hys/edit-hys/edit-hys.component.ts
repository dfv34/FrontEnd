import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { SHysService } from 'src/app/service/s-hys.service';

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
        this.hysLab = data;
      }, err =>{
        alert("Error al modificar la habilidad");
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
         alert("Error al modificar la habilidad");
         this.router.navigate(['']);
      }
    )
  }

}
