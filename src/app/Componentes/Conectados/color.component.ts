import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html'
})

//se crea la clase
export class ColorComponent {
  //variables  
  title = 'colores';  
  colorLocal: string = '';

  constructor() {    
  }

  //metodos
  generarRandom(): string {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): string {
    this.colorLocal = "#" + this.generarRandom() + this.generarRandom() + this.generarRandom();
    return this.colorLocal;
  }
}

