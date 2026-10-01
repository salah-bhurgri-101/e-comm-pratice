import { Routes } from '@angular/router';
import { LandingComponent } from './public/landing/landing.component';
import { AdminComponent } from './admin/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
