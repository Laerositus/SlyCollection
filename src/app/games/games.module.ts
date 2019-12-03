import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { GameListComponent } from './game-list/game-list.component'; 
import { GameDetailComponent } from './game-detail/game-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  }
]

@NgModule({
  declarations: [GamesComponent, GameListComponent, GameDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, GamesComponent]
})
export class GamesModule { }
