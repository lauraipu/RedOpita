import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface AuthUser {
  nombre: string;
  email: string;
  role: 'Voluntario' | 'Organización';
  puntos: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<AuthUser | null>(this.loadUser());
  user$ = this.userSubject.asObservable();

  login(): Observable<true> {
    const user: AuthUser = {
      nombre: 'Laura',
      email: 'laura@demo.com',
      role: 'Voluntario',
      puntos: 150
    };
    localStorage.setItem('authUser', JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify({ name: user.nombre, points: user.puntos }));
    this.userSubject.next(user);
    return of(true);
  }

  logout() {
    localStorage.removeItem('authUser');
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  private loadUser(): AuthUser | null {
    const raw = localStorage.getItem('authUser');
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as AuthUser;
  }
}
