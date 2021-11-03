import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AcercaDeComponent } from './EjampleNav/acerca-de/acerca-de.component';
import { ListaDeLibrosComponent } from './EjampleNav/lista-de-libros/lista-de-libros.component';
import { EncabezadoComponent } from './EjampleNav/encabezado/encabezado.component';
import { InicioComponent } from './EjampleNav/inicio/inicio.component';
import { Error404Component } from './EjampleNav/error404/error404.component';
import { DetallesComponent } from './EjampleNav/detalles/detalles.component';

import { HeroesModule } from './ModuloHeroes/heroes.module';

@NgModule({
  declarations: [ 
    AppComponent,   
    AcercaDeComponent,
    ListaDeLibrosComponent,
    EncabezadoComponent,
    InicioComponent,
    Error404Component,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
