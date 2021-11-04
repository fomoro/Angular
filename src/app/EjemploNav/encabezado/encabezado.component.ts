import { Component, OnInit } from '@angular/core';
import { LibrosseleccionadosService } from '../librosseleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent implements OnInit {

  mostrarLista: boolean = false

  constructor(public librosSeleccionados: LibrosseleccionadosService) {     
  }

  ngOnInit() {
  }

}
