import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]  // Protegido por el guard
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then(m => m.HorarioPageModule),
    canActivate: [AuthGuard]  // Protegido por el guard
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then(m => m.AsistenciaPageModule),
    canActivate: [AuthGuard]  // Protegido por el guard
  },
  {
    path: 'mis-asistencias',
    loadChildren: () => import('./pages/mis-asistencias/mis-asistencias.module').then(m => m.MisAsistenciasPageModule),
    canActivate: [AuthGuard]  // Protegido por el guard
  },
  {
    path: 'recu-contra',
    loadChildren: () => import('./pages/recu-contra/recu-contra.module').then(m => m.RecuContraPageModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/page-nf/page-nf.module').then(m => m.PageNFPageModule)
  },
  {
    path: '**',
    redirectTo: '404'  // Redirige a 404 para rutas no encontradas
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
