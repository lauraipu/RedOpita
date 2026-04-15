import { Component, OnInit } from '@angular/core';

declare var L: any; // Esto le dice a TS que Leaflet viene de un script externo

@Component({
  selector: 'app-maps',
  standalone: true,
  templateUrl: './maps.html'
})
export class MapsComponent implements OnInit {

  ngOnInit() {
    // 1. Inicializar el mapa centrado en Neiva
    const map = L.map('map').setView([2.9273, -75.2819], 13);

    // 2. Cargar la capa de OpenStreetMap (Open Source)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 3. Agregar un marcador de ejemplo (Comedor Comuna 6)
    L.marker([2.9370, -75.2750])
      .addTo(map)
      .bindPopup('<b>Comedor La Esperanza</b><br>Necesitamos voluntarios para este sábado.')
      .openPopup();
  }
}