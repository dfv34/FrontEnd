import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { SHysService } from 'src/app/service/s-hys.service';

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
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
