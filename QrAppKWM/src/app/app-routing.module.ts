import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]  
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
    canActivate: [AuthGuard]  
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then(m => m.AsistenciaPageModule),
    canActivate: [AuthGuard]  
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
    redirectTo: '404' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
