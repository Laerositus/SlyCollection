import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from './../../environments/environment';

const root = environment.API;

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root, // default root path to the server's web api

  entityHttpResourceUrls: {
    Hero: {
      // You must specify the root as part of the resource URL.
      entityResourceUrl: `${root}/heroes/`,
      collectionResourceUrl: `${root}/heroes/`
    },
    Villain: {
      entityResourceUrl: `${root}/villains/`,
      collectionResourceUrl: `${root}/villains/`
    },
    Game: {
      entityResourceUrl: `${root}/games/`,
      collectionResourceUrl: `${root}/games/`
    },
    Character: {
      entityResourceUrl: `${root}/characters/`,
      collectionResourceUrl: `${root}/characters/`
    },
    VoiceActor: {
      entityResourceUrl: `${root}/voiceactor/`,
      collectionResourceUrl: `${root}/voiceactor/`
    },
    Weapon: {
      entityResourceUrl: `${root}/weapons/`,
      collectionResourceUrl: `${root}/weapons/`
    }
  }
};
