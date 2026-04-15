import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AuthUser {
  nombre: string;
  email: string;
  role: 'Voluntario' | 'Organización';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.userSubject.asObservable();

  login(user: AuthUser) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }

  setSession(user: AuthUser | null) {
    this.userSubject.next(user);
  }
}
