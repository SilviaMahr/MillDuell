import { Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
//import {DashboardComponent} from './components/dashboard/dashboard.component'; // Pfad zu deiner Komponente prüfen!

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent},// Leitet leere URL auf /login um
  { path: '**', redirectTo: 'login' }                  // Catch-all: leitet alles Unbekannte zum Login
];
