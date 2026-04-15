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

interface CommunityEvent {
  title: string;
  description: string;
  time: string;
  details: string;
}

interface CommunityChat {
  author: string;
  message: string;
  time: string;
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
  showLoginModal = false;
  modalCommunity: Community | null = null;

  communityEvents: Record<string, CommunityEvent[]> = {
    huertas: [
      {
        title: 'Coordinación de siembra comunitaria',
        description: 'Organizamos la próxima jornada de siembra para el sábado en la comuna 6.',
        time: '2h',
        details: 'Reúnete en la plaza central a las 8:00 AM para repartir semillas y herramientas. Trae guantes y agua.'
      },
      {
        title: 'Recolección de donaciones de abono',
        description: 'Buscamos voluntarios para recoger insumos donados por el vivero local.',
        time: '5h',
        details: 'Punto de encuentro en el mercado de la 14, con transporte disponible desde la sede de la comunidad.'
      }
    ],
    logistica: [
      {
        title: 'Coordinación de vehículos para comedores',
        description: 'Necesitamos dos carros para recoger donaciones mañana.',
        time: '2h',
        details: 'Se solicita disponibilidad de transporte con capacidad para al menos 20 cajas. Salida a las 7:30 AM.'
      },
      {
        title: 'Plan de rutas de entrega',
        description: 'Diseñamos el recorrido para entregar alimentos en cinco sectores vulnerables.',
        time: '4h',
        details: 'Se definirá el punto de salida y los horarios de entrega para garantizar que la cadena de frío se mantenga.'
      }
    ]
  };
  selectedEvent: CommunityEvent | null = null;
  communityChats: Record<string, CommunityChat[]> = {
    huertas: [
      { author: 'María', message: '¿Quién puede ayudar con compost esta semana?', time: '1h' },
      { author: 'Juan', message: 'Yo puedo traer bolsas de abono el sábado.', time: '45m' },
      { author: 'Ana', message: 'Recuerden que hay jornada de siembra el domingo.', time: '10m' },
    ],
    logistica: [
      { author: 'Sandra', message: 'Necesitamos dos carros para recoger donaciones mañana.', time: '2h' },
      { author: 'Carlos', message: 'Voy con mi camioneta a las 8am.', time: '1h' },
    ]
  };

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

  openLoginModal(community: Community) {
    this.modalCommunity = community;
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
    this.modalCommunity = null;
  }

  joinCommunity(community: Community) {
    this.joinedGroups.add(community.id);
    this.openCommunity(community);
  }

  setTab(tab: 'hilos' | 'miembros') {
    this.activeTab = tab;
  }

  openEventDetail(event: CommunityEvent) {
    this.selectedEvent = event;
  }

  closeEventDetail() {
    this.selectedEvent = null;
  }

  backToList() {
    this.selectedCommunity = null;
  }

  isJoined(community: Community) {
    return this.joinedGroups.has(community.id);
  }
}
