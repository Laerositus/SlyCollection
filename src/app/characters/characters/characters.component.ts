import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../core';
import { CharacterService } from '../character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html'
})

export class CharactersComponent implements OnInit {
    selected: Character;
    characters$: Observable<Character[]>;
    message = '?';
    characterToDelete: Character;
    showModal = false;
  
    constructor(
      private characterService: CharacterService // , private modalService: ModalService
    ) {
      this.characters$ = characterService.entities$;
    }
  
    ngOnInit() {
      this.getCharacters();
    }
  
    add(character: Character) {
      this.characterService.add(character);
    }
  
    askToDelete(character: Character) {
      this.characterToDelete = character;
      this.showModal = true;
      if (this.characterToDelete.name) {
        this.message = `Would you like to delete ${this.characterToDelete.name}?`;
      }
    }
  
    clear() {
      this.selected = null;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
    deleteCharacter() {
      this.closeModal();
      if (this.characterToDelete) {
        this.characterService
          .delete(this.characterToDelete.id)
          .subscribe(() => (this.characterToDelete = null));
      }
      this.clear();
    }
  
    enableAddMode() {
      this.selected = <any>{};
    }
  
    getCharacters() {
      this.characterService.getAll();
      this.clear();
    }
  
    save(character: Character) {
      if (this.selected && this.selected.name) {
        this.update(character);
      } else {
        this.add(character);
      }
    }
  
    select(character: Character) {
      this.selected = character;
    }
  
    update(character: Character) {
      this.characterService.update(character);
    }
  }
  