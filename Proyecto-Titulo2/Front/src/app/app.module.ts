import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroTrabajardoresComponent } from './Componentes/registro-trabajardores/registro-trabajardores.component';
import { InicioSesionComponent } from './Componentes/inicio-sesion/inicio-sesion.component';
import { AgendaReservasComponent } from './Componentes/agenda-reservas/agenda-reservas.component';
import { ReservasComponent } from './Componentes/reservas/reservas.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistroTrabajardoresComponent,
    InicioSesionComponent,
    AgendaReservasComponent,
    ReservasComponent,
    ProfesionalesComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
