import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './donaciones.html',
  styleUrls: ['./donaciones.css']
})
export class DonacionesComponent {
  amount = 0;
  status: 'pendiente' | 'aprobado' | 'rechazado' | '' = '';
  error = '';

  submitDonation() {
    this.error = '';
    this.status = '';
    if (this.amount <= 0) {
      this.error = 'Ingresa un monto válido mayor a cero.';
      return;
    }
    if (this.amount < 50) {
      this.status = 'rechazado';
      return;
    }
    if (this.amount <= 500) {
      this.status = 'pendiente';
      return;
    }
    this.status = 'aprobado';
  }

  resetForm() {
    this.amount = 0;
    this.status = '';
    this.error = '';
  }
}
