import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';
import { CentroComponent } from './Componentes/centro/centro.component';
import { ReservaComponent } from './Componentes/reserva/reserva.component';
import { Reserva2Component } from './Componentes/reserva2/reserva2.component';
import { Reserva3Component } from './Componentes/reserva3/reserva3.component';
import { SaludoComponent } from './Componentes/saludo/saludo.component';
import { Reserva4Component } from './Componentes/reserva4/reserva4.component';
import { Reserva5Component } from './Componentes/reserva5/reserva5.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"Profesionales",component:ProfesionalesComponent},
  {path:"Identificacion",component:ReservaComponent},
  {path:"InformacionPaciente",component:InformacionComponent},
  {path:"Nuestro_Centro",component:CentroComponent},
  {path:"Especialidad",component:Reserva2Component},
  {path:"Fechas-Horas",component:Reserva3Component},
  {path:"DatosPersonales",component:Reserva4Component},
  {path:"ConfirmarDatos",component:Reserva5Component},
  {path:"ReservaExitosa",component:SaludoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
