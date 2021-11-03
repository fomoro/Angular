import { Component } from '@angular/core';

@Component({
  selector: 'app-directivasComunes',
  templateUrl: './directivasComunes.component.html',
  styleUrls: ['./directivasComunes.component.css']
})

//se crea la clase
export class DirectivasComunesComponent {
  //variables  
  valor1:boolean;
  valor2:boolean;
  color:string;
  diasSemana:any

  constructor() {    
    this.valor1=  false
    this.valor2 = true
    this.color ='';
  }
 
}

