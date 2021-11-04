import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AleatorioComponent } from './Componentes/Conectados/aleatorio/aleatorio.component';
import { ColorComponent } from './Componentes/Conectados/color.component';

import { AcercaDeComponent } from './EjemploNav/acerca-de/acerca-de.component';
import { ListaDeLibrosComponent } from './EjemploNav/lista-de-libros/lista-de-libros.component';
import { EncabezadoComponent } from './EjemploNav/encabezado/encabezado.component';
import { InicioComponent } from './EjemploNav/inicio/inicio.component';
import { Error404Component } from './EjemploNav/error404/error404.component';
import { DetallesComponent } from './EjemploNav/detalles/detalles.component';

import { HeroesModule } from './ModuloHeroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { LibrosseleccionadosService } from './EjemploNav/librosseleccionados.service';


@NgModule({
  declarations: [ 
    AppComponent,  
    AleatorioComponent, 
    ColorComponent,
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
    HeroesModule,
    DbzModule
  ],
  providers: [
    LibrosseleccionadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
