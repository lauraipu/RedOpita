import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  email: string = 'fosi34aa@gmail.com';
  password: string = 'Demo1234!';
  usuario = {
    nombre: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.registrado = false;
  }

  onSubmit() {
    if (this.isLogin) {
      const user = {
        name: this.usuario.nombre || 'Laura',
        points: 150
      };
      localStorage.setItem('user', JSON.stringify(user));

      this.authService.login().subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
      return;
    }

    this.registrado = true;
    setTimeout(() => {
      this.isLogin = true;
      this.registrado = false;
    }, 3000);
  }
}