import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva4',
  templateUrl: './reserva4.component.html',
  styleUrls: ['./reserva4.component.scss']
})
export class Reserva4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['Fechas-Horas'])
  }

  siguiente(){
    this.router.navigate(['ConfirmarDatos'])
  }
}
