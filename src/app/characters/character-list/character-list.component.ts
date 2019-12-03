import {
    Component,
    EventEmitter,
    Input,
    Output,
    ChangeDetectionStrategy
  } from '@angular/core';
  import { Character } from '../../core';
  
  @Component({
    selector: 'app-character-list',
    templateUrl: './character-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class CharacterListComponent {
    @Input() characters: Character[];
    @Input() selectedcharacter: Character;
    @Output() deleted = new EventEmitter<Character>();
    @Output() selected = new EventEmitter<Character>();
  
    selectcharacter(character: Character) {
      this.selected.emit(character);
    }
  
    deletecharacter(character: Character) {
      this.deleted.emit(character);
    }
  
    byId(character: Character) {
      return character.id;
    }
  }
  