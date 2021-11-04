import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LibrosseleccionadosService } from '../librosseleccionados.service';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html'
})

export class ListaDeLibrosComponent implements OnInit {

  libros: any;
  errorHttp = false;
  cargando: boolean = false;

  constructor(private http: HttpClient, public librosseleccionados: LibrosseleccionadosService) {
  }

  ngOnInit() {
    this.cargando = true;
    this.cargarLista();
  }

  cargarLista(): void {
    console.log("lista")
    this.http.get('assets/json/libros.json').subscribe(
        //(respuesta) => { this.libros = respuesta },
        (respuesta) => { this.libros = respuesta; this.cargando = false; },
        (respuesta) => { this.errorHttp = true },
      )
  }

  agregarLibro(_libro: any) {
    this.librosseleccionados.agregarLibros(_libro);
  }
}
