import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from '../../core';
import { WeaponService } from '../weapon.service';

@Component({
    selector: 'app-weapons',
    templateUrl: './weapons.component.html'
})

export class WeaponsComponent implements OnInit {
    selected: Weapon;
    weapons$: Observable<Weapon[]>;
    message = '?';
    weaponToDelete: Weapon;
    showModal = false;
  
    constructor(
      private weaponService: WeaponService // , private modalService: ModalService
    ) {
      this.weapons$ = weaponService.entities$;
    }
  
    ngOnInit() {
      this.getWeapons();
    }
  
    add(weapon: Weapon) {
      this.weaponService.add(weapon);
    }
  
    askToDelete(weapon: Weapon) {
      this.weaponToDelete = weapon;
      this.showModal = true;
      if (this.weaponToDelete.name) {
        this.message = `Would you like to delete ${this.weaponToDelete.name}?`;
      }
    }
  
    clear() {
      this.selected = null;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
    deleteWeapon() {
      this.closeModal();
      if (this.weaponToDelete) {
        this.weaponService
          .delete(this.weaponToDelete.id)
          .subscribe(() => (this.weaponToDelete = null));
      }
      this.clear();
    }
  
    enableAddMode() {
      this.selected = <any>{};
    }
  
    getWeapons() {
      this.weaponService.getAll();
      this.clear();
    }
  
    save(weapon: Weapon) {
      if (this.selected && this.selected.name) {
        this.update(weapon);
      } else {
        this.add(weapon);
      }
    }
  
    select(weapon: Weapon) {
      this.selected = weapon;
    }
  
    update(weapon: Weapon) {
      this.weaponService.update(weapon);
    }
  }
  