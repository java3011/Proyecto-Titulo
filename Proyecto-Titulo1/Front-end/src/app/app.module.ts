import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';
import { CentroComponent } from './Componentes/centro/centro.component';
import { ReservaComponent } from './Componentes/reserva/reserva.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { Reserva2Component } from './Componentes/reserva2/reserva2.component';
import { SaludoComponent } from './Componentes/saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reserva4Component } from './Componentes/reserva4/reserva4.component';
import { Reserva5Component } from './Componentes/reserva5/reserva5.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProfesionalesComponent,
    InformacionComponent,
    CentroComponent,
    ReservaComponent,
    HeaderComponent,
    FooterComponent,
    Reserva2Component,
    SaludoComponent,
    Reserva4Component,
    Reserva5Component
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
