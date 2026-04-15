import { Component, OnInit } from '@angular/core';
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
export class PerfilComponent implements OnInit {
  summary: any = {
    points: 0,
    badge: 'Bronce',
    hours: 0
  };
  hours: number = 1; // Inicializa con 1 para que el campo no esté vacío

  constructor(private gamificacion: GamificacionService) {}

  ngOnInit() {
    this.summary = this.gamificacion.getSummary();
  }

  recordHours() {
    this.gamificacion.assignPoints(this.hours);
    this.summary = this.gamificacion.getSummary();
    console.log('Horas registradas:', this.hours);
    alert('¡Servicio registrado con éxito!');
  }
}

