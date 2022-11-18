import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva3',
  templateUrl: './reserva3.component.html',
  styleUrls: ['./reserva3.component.scss']
})
export class Reserva3Component implements OnInit {
  
  currentDate:any = document.querySelector(".current-date");

  date= new Date()
  curryYear = this.date.getFullYear()
  curreMonth = this.date.getMonth()
  
  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  renderCalendar = () => {
    let lastDateofMonth = new Date(this.curryYear, this.curreMonth + 1, 0).getDate();
    this.currentDate.innerText = `${this.months[this.curreMonth]} ${this.curryYear}`
  }
    
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(['Especialidad'])
  }

  confir(){
    this.router.navigate(['DatosPersonales'])
  }

}
