import { Injectable } from '@angular/core';

export interface VolunteerSummary {
  points: number;
  badge: 'Bronce' | 'Plata' | 'Oro';
  hours: number;
}

@Injectable({
  providedIn: 'root'
})
export class GamificacionService {
  private hours = 0;
  private points = 0;

  private computeBadge(points: number): VolunteerSummary['badge'] {
    if (points >= 250) {
      return 'Oro';
    }
    if (points >= 120) {
      return 'Plata';
    }
    return 'Bronce';
  }

  assignPoints(hours: number) {
    const earned = Math.max(0, Math.round(hours * 12));
    this.hours += hours;
    this.points += earned;
    return earned;
  }

  getSummary(): VolunteerSummary {
    return {
      points: this.points,
      badge: this.computeBadge(this.points),
      hours: this.hours
    };
  }
}
