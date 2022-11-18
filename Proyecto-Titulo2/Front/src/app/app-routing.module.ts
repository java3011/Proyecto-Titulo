import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './Componentes/inicio-sesion/inicio-sesion.component';
import { RegistroTrabajardoresComponent } from './Componentes/registro-trabajardores/registro-trabajardores.component';
import { ReservasComponent } from './Componentes/reservas/reservas.component';
import { AgendaReservasComponent } from './Componentes/agenda-reservas/agenda-reservas.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';

const routes: Routes = [
  {path:"",component:InicioSesionComponent},
  {path:"Registro",component:RegistroTrabajardoresComponent},
  {path:"Calendario",component:AgendaReservasComponent},
  {path:"ListaReservas", component:ReservasComponent},
  {path:"Profesionales",component:ProfesionalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
