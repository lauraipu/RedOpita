import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apoyo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apoyo.html'
})
export class ApoyoComponent {
  nombre = '';
  email = '';

  redirectToWhatsApp(event: Event) {
    event.preventDefault();
    const phone = '573001234567';
    const text = encodeURIComponent(`Hola, soy ${this.nombre || 'un interesado'}. Mi correo es ${this.email || 'no proporcionado'}. Quiero donar excedentes de alimentos.`);
    window.location.href = `https://wa.me/${phone}?text=${text}`;
  }
}