import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-reservas',
  templateUrl: './agenda-reservas.component.html',
  styleUrls: ['./agenda-reservas.component.scss']
})
export class AgendaReservasComponent implements OnInit {

  public events: any[];
  public options: any;

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
