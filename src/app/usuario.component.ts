import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {
  title = 'usuario';
  usuario = 'wolfan';
  usuarios = ['agustina','viviana'];
  visible = false;

  constructor(){
    setTimeout(()=> this.visible = true,3000)
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuario);
  }
}

