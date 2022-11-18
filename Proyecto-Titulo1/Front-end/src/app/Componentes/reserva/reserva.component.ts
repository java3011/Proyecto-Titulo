import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  formulario:any= FormGroup;
  
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm(){
    this.formulario = this.formBuilder.group({
      opcion: ['',[Validators.required]],
      date: ['',[Validators.required]],
      time: ['',[Validators.required]],
    });
  }



  ngOnInit(): void {
  }

  continuar(){
    this.router.navigate(['Especialidad'])
  }
}



