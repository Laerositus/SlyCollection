import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Game } from '../core';

@Injectable({ providedIn: 'root' })
export class GameService extends EntityCollectionServiceBase<Game> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Game', serviceElementsFactory);
  }
}
