import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ad-chamado',
    loadChildren: () => import('./ad-chamado/ad-chamado.module').then( m => m.AdChamadoPageModule)
  },
  {
    path: 'dados-chamado',
    loadChildren: () => import('./dados-chamado/dados-chamado.module').then( m => m.DadosChamadoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
