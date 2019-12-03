import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent},
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'villains',
    loadChildren: () => import('./villains/villains.module').then(m => m.VillainsModule)
  },
  { 
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
  },
  { 
    path: 'games',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
  },
  { 
    path: 'voiceActors',
    loadChildren: () => import('./voiceActors/voiceActors.module').then(m => m.VoiceActorsModule)
  },
  { 
    path: 'weapons',
    loadChildren: () => import('./weapons/weapons.module').then(m => m.WeaponsModule)
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
