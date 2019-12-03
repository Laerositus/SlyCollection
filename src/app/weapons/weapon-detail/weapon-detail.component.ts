import {
    Component,
    Input,
    EventEmitter,
    OnChanges,
    Output,
    SimpleChanges,
    ChangeDetectionStrategy
  } from '@angular/core';
  
  import { Weapon } from '../../core';
  
  @Component({
    selector: 'app-weapon-detail',
    templateUrl: './weapon-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class WeaponDetailComponent implements OnChanges {
    @Input() weapon: Weapon;
    @Output() unselect = new EventEmitter<string>();
    @Output() save = new EventEmitter<Weapon>();
  
    addMode = false;
    editingWeapon: Weapon;

    ngOnChanges(){}
    
    clear() {
      this.unselect.emit();
    }
  
    saveWeapon() {
      this.save.emit(this.editingWeapon);
      this.clear();
    }
  }
  