import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Opportunity {
  id: string;
  title: string;
  category: string;
  hours: number;
  status: 'Abierta' | 'Cerrada';
  applicants: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  selectedOpportunity: Opportunity | null = null;
  form = {
    title: '',
    category: '',
    hours: 0,
    status: 'Abierta' as 'Abierta' | 'Cerrada'
  };
  opportunities: Opportunity[] = [
    { id: 'o1', title: 'Apoyo en comedor social', category: 'Alimentación', hours: 4, status: 'Abierta', applicants: 12 },
    { id: 'o2', title: 'Gestión de donaciones', category: 'Logística', hours: 3, status: 'Abierta', applicants: 8 }
  ];

  openForm(opportunity: Opportunity | null = null) {
    this.selectedOpportunity = opportunity;
    if (opportunity) {
      this.form.title = opportunity.title;
      this.form.category = opportunity.category;
      this.form.hours = opportunity.hours;
      this.form.status = opportunity.status;
    } else {
      this.form.title = '';
      this.form.category = '';
      this.form.hours = 0;
      this.form.status = 'Abierta';
    }
  }

  saveOpportunity() {
    if (!this.form.title || !this.form.category || this.form.hours <= 0) {
      return;
    }
    if (this.selectedOpportunity) {
      this.opportunities = this.opportunities.map(item => item.id === this.selectedOpportunity?.id ? {
        ...item,
        title: this.form.title,
        category: this.form.category,
        hours: this.form.hours,
        status: this.form.status
      } : item);
    } else {
      const nextId = `o${this.opportunities.length + 1}`;
      this.opportunities = [...this.opportunities, {
        id: nextId,
        title: this.form.title,
        category: this.form.category,
        hours: this.form.hours,
        status: this.form.status,
        applicants: 0
      }];
    }
    this.openForm(null);
  }

  deleteOpportunity(opportunity: Opportunity) {
    this.opportunities = this.opportunities.filter(item => item.id !== opportunity.id);
  }
}
