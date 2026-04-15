import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Community {
  id: string;
  title: string;
  members: string;
  status: string;
  description: string;
  accent: 'success' | 'warning';
}

@Component({
  selector: 'app-comunidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comunidades.html',
  styleUrls: ['./comunidades.css'],
})
export class Comunidades {
  selectedCommunity: Community | null = null;
  activeTab: 'hilos' | 'miembros' = 'hilos';
  joinedGroups = new Set<string>();

  communities: Community[] = [
    {
      id: 'huertas',
      title: 'Huertas Urbanas Neiva',
      members: '86 miembros',
      status: 'Activo hoy',
      description: 'Compartimos semillas, abono y técnicas de cultivo para fortalecer la soberanía alimentaria en nuestros barrios.',
      accent: 'success'
    },
    {
      id: 'logistica',
      title: 'Logística Comedores Comuna 10',
      members: '42 miembros',
      status: 'Activo hace 2h',
      description: 'Coordinación de transporte para excedentes de alimentos de restaurantes hacia puntos de entrega social.',
      accent: 'warning'
    }
  ];

  openCommunity(community: Community) {
    this.selectedCommunity = community;
    this.activeTab = 'hilos';
  }

  joinCommunity(community: Community) {
    this.joinedGroups.add(community.id);
    this.openCommunity(community);
  }

  setTab(tab: 'hilos' | 'miembros') {
    this.activeTab = tab;
  }

  backToList() {
    this.selectedCommunity = null;
  }

  isJoined(community: Community) {
    return this.joinedGroups.has(community.id);
  }
}
