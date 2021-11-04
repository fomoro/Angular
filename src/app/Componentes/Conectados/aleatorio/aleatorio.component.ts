import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html'
})
export class AleatorioComponent implements OnInit {

  @Input() colorNombre: string = '';
  aleatorio: Number = Math.floor(Math.random() * 100)

  constructor() { }

  ngOnInit(): void {
  }

}


