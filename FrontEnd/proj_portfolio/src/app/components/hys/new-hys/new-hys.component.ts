import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { SHysService } from 'src/app/service/s-hys.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {
  nombreSk: string = '';
  fotoSk: string = '';
  porcentSk: number = 0;

  constructor(private sHys: SHysService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const hyse = new Hys (this.nombreSk, this.fotoSk, this.porcentSk);
    this.sHys.save(hyse).subscribe(
      data => {
        Swal.fire('Habilidad Añadida','Ok!');
        
        this.router.navigate(['']);
      }, err => {
        Swal.fire('Error al añadir la Habilidad','ERROR!');
        this.router.navigate(['']);
      }
    )
  }

}
