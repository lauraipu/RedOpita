import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GamificacionService } from '../gamificacion/gamificacion.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent {
  hours = 0;
  summary = this.gamificacion.getSummary();

  constructor(private gamificacion: GamificacionService) {}

  recordHours() {
    if (this.hours <= 0) {
      return;
    }
    this.gamificacion.assignPoints(this.hours);
    this.summary = this.gamificacion.getSummary();
    this.hours = 0;
  }
}
