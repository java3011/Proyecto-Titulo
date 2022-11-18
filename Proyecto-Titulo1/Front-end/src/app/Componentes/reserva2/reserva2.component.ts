import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva2',
  templateUrl: './reserva2.component.html',
  styleUrls: ['./reserva2.component.scss']
})
export class Reserva2Component implements OnInit {

  formulario2:any = FormGroup;

  constructor(private router: Router, private formBuilder:FormBuilder) {
    this.builForm();
  }

  private builForm(){
    this.formulario2 = this.formBuilder.group({
      name: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      rut: ['',[Validators.required]],
      correo: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      numero: ['',[Validators.required]],
      comuna: ['',[Validators.required]],
    });  
  }

  save(event: Event){
    event.preventDefault();
    if(this.formulario2.valid){
      const value = this.formulario2.value;
    console.log(value);
    }
    
  }

  ngOnInit(): void {
  }
  navegar(){
    this.router.navigate(['Identificacion'])
  }
  siguiente(){
    this.router.navigate(['Fechas-Horas'])
  }
}
