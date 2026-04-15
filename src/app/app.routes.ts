import { Routes } from '@angular/router';
import { Inicio } from './features/inicio/inicio';
import { MapsComponent } from './features/maps/maps';
import { Comunidades } from './features/comunidades/comunidades';
import { ApoyoComponent } from './features/apoyo/apoyo';
import { LoginComponent } from './features/auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'maps', component: MapsComponent },
  { path: 'comunidades', component: Comunidades },
  { path: 'apoyo', component: ApoyoComponent },
  { path: 'login', component: LoginComponent },
];