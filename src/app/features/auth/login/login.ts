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
  isLogin: boolean = true;
  registrado: boolean = false; // Nueva variable para el éxito

  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.registrado = false; // Reiniciar estado al cambiar
  }

  onSubmit() {
    if (this.isLogin) {
      console.log('Login exitoso');
    } else {
      // Simulación de registro exitoso
      this.registrado = true;
      console.log('Registro completado para:', this.usuario.nombre);
      
      // Opcional: Volver al login automáticamente después de 3 segundos
      setTimeout(() => {
        this.isLogin = true;
        this.registrado = false;
      }, 3000);
    }
  }
}