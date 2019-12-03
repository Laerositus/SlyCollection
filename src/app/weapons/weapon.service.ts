import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Weapon } from '../core';

@Injectable({ providedIn: 'root' })
export class WeaponService extends EntityCollectionServiceBase<Weapon> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Weapon', serviceElementsFactory);
  }
}
