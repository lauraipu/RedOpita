import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  isLogin: boolean = true; // Controla si vemos login o registro

  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      console.log('Iniciando sesión:', this.usuario.email);
    } else {
      console.log('Registrando usuario:', this.usuario);
    }
  }
}