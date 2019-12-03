import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

import { Game } from '../../core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDetailComponent implements OnChanges {
  @Input() game: Game;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Game>();

  addMode = false;
  editingGame: Game;

  ngOnChanges(changes: SimpleChanges) {
    if (this.game && this.game.id) {
      this.editingGame = { ...this.game };
      this.addMode = false;
    } else {
      this.editingGame = { id: undefined, name: '', platform: [''], publisher: '', developer: [''], released: new Date(), moreInfo: ''};
      this.addMode = true;
    }
  }

  clear() {
    this.unselect.emit();
  }

  saveGame() {
    this.save.emit(this.editingGame);
    this.clear();
  }
} 