import {
    Component,
    Input,
    EventEmitter,
    OnChanges,
    Output,
    SimpleChanges,
    ChangeDetectionStrategy
  } from '@angular/core';
  
  import { Character } from '../../core';
  
  @Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class CharacterDetailComponent implements OnChanges {
    @Input() character: Character;
    @Output() unselect = new EventEmitter<string>();
    @Output() save = new EventEmitter<Character>();
  
    addMode = false;
    editingCharacter: Character;

    ngOnChanges(){}
    
    clear() {
      this.unselect.emit();
    }
  
    saveCharacter() {
      this.save.emit(this.editingCharacter);
      this.clear();
    }
  }
  