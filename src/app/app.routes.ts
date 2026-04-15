import { Routes } from '@angular/router';
import { Inicio } from './features/inicio/inicio';
import { MapsComponent } from './features/maps/maps';
import { Comunidades } from './features/comunidades/comunidades';
import { ApoyoComponent } from './features/apoyo/apoyo';
import { LoginComponent } from './features/auth/login/login';
import { DashboardComponent } from './features/dashboard/dashboard';
import { PerfilComponent } from './features/perfil/perfil';
import { DonacionesComponent } from './features/support/donaciones';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'maps', component: MapsComponent },
  { path: 'comunidades', component: Comunidades },
  { path: 'apoyo', component: ApoyoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'support/donaciones', component: DonacionesComponent }
];