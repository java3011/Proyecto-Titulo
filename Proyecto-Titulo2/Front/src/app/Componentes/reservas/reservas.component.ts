import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  primero(){
    this.router.navigate(['Calendario'])
  }

  segundo(){
    this.router.navigate(['Profesionales'])
  }

  tercero(){
    this.router.navigate(['ListaReservas'])
  }

  cuarto(){
    this.router.navigate([''])
  }
}
