import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeComponent } from './EjemploNav/acerca-de/acerca-de.component';
import { ListaDeLibrosComponent } from './EjemploNav/lista-de-libros/lista-de-libros.component';
import { Error404Component } from './EjemploNav/error404/error404.component';
import { DetallesComponent } from './EjemploNav/detalles/detalles.component';
import { InicioComponent } from './EjemploNav/inicio/inicio.component';

const routes: Routes = [
  { path: 'lista-libros', component: ListaDeLibrosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'detalles/:libroId', component: DetallesComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'lista-libros', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }