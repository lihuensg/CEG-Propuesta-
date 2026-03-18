import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Institucional } from './institucional/institucional';
import { Servicios } from './servicios/servicios';
import { Cegonline } from './cegonline/cegonline';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'institucional', component: Institucional },
  { path: 'servicios', component: Servicios },
  { path: 'cegonline', component: Cegonline },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: 'home' }
];
