import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  isLogin = true;
  registrado = false;
  role: 'Voluntario' | 'Organización' = 'Voluntario';
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.registrado = false;
  }

  onSubmit() {
    if (this.isLogin) {
      if (this.role === 'Organización') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/perfil']);
      }
      return;
    }
    this.registrado = true;
    setTimeout(() => {
      this.isLogin = true;
      this.registrado = false;
    }, 3000);
  }
}