import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { CharacterListComponent } from './character-list/character-list.component'; 
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  }
]

@NgModule({
  declarations: [CharactersComponent, CharacterListComponent, CharacterDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, CharactersComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class CharactersModule { }
