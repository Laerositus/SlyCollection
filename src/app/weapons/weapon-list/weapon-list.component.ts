import {
    Component,
    EventEmitter,
    Input,
    Output,
    ChangeDetectionStrategy
  } from '@angular/core';
  import { Weapon } from '../../core';
  
  @Component({
    selector: 'app-weapon-list',
    templateUrl: './weapon-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class WeaponListComponent {
    @Input() weapons: Weapon[];
    @Input() selectedweapon: Weapon;
    @Output() deleted = new EventEmitter<Weapon>();
    @Output() selected = new EventEmitter<Weapon>();
  
    selectweapon(weapon: Weapon) {
      this.selected.emit(weapon);
    }
  
    deleteweapon(weapon: Weapon) {
      this.deleted.emit(weapon);
    }
  
    byId(weapon: Weapon) {
      return weapon.id;
    }
  }
  