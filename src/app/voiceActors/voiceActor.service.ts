import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { VoiceActor } from '../core';

@Injectable({ providedIn: 'root' })
export class VoiceActorService extends EntityCollectionServiceBase<VoiceActor> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('VoiceActor', serviceElementsFactory);
  }
}
