import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva5',
  templateUrl: './reserva5.component.html',
  styleUrls: ['./reserva5.component.scss']
})
export class Reserva5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['Fechas-Horas'])
  }
  
  siguiente(){
    this.router.navigate(['ReservaExitosa'])
  }
}
