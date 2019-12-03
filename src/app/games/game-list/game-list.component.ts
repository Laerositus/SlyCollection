import {
    Component,
    EventEmitter,
    Input,
    Output,
    ChangeDetectionStrategy
  } from '@angular/core';
  import { Game } from '../../core';
  
  @Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class GameListComponent {
    @Input() games: Game[];
    @Input() selectedgame: Game;
    @Output() deleted = new EventEmitter<Game>();
    @Output() selected = new EventEmitter<Game>();
  
    selectgame(game: Game) {
      this.selected.emit(game);
    }
  
    deletegame(game: Game) {
      this.deleted.emit(game);
    }
  
    byId(game: Game) {
      return game.id;
    }
  }
  