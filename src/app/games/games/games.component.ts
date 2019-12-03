import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../core';
import { GameService } from '../game.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html'
})

export class GamesComponent implements OnInit {
    selected: Game;
    games$: Observable<Game[]>;
    message = '?';
    gameToDelete: Game;
    showModal = false;
  
    constructor(
      private gameService: GameService // , private modalService: ModalService
    ) {
      this.games$ = gameService.entities$;
    }
  
    ngOnInit() {
      this.getGames();
    }
  
    add(game: Game) {
      this.gameService.add(game);
    }
  
    askToDelete(game: Game) {
      this.gameToDelete = game;
      this.showModal = true;
      if (this.gameToDelete.name) {
        this.message = `Would you like to delete ${this.gameToDelete.name}?`;
      }
    }
  
    clear() {
      this.selected = null;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
    deleteGame() {
      this.closeModal();
      if (this.gameToDelete) {
        this.gameService
          .delete(this.gameToDelete.id)
          .subscribe(() => (this.gameToDelete = null));
      }
      this.clear();
    }
  
    enableAddMode() {
      this.selected = <any>{};
    }
  
    getGames() {
      this.gameService.getAll();
      this.clear();
    }
  
    save(game: Game) {
      if (this.selected && this.selected.name) {
        this.update(game);
      } else {
        this.add(game);
      }
    }
  
    select(game: Game) {
      this.selected = game;
    }
  
    update(game: Game) {
      this.gameService.update(game);
    }
  }
  