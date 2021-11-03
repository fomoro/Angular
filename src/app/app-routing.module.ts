import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeComponent } from './EjampleNav/acerca-de/acerca-de.component';
import { ListaDeLibrosComponent } from './EjampleNav/lista-de-libros/lista-de-libros.component';
import { Error404Component } from './EjampleNav/error404/error404.component';
import { DetallesComponent } from './EjampleNav/detalles/detalles.component';

const routes: Routes = [
  { path: 'lista-libros', component: ListaDeLibrosComponent },
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