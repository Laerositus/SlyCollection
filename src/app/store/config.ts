import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from './../../environments/environment';

const root = environment.API;

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root, // default root path to the server's web api

  entityHttpResourceUrls: {
    Game: {
      entityResourceUrl: `${root}/games/`,
      collectionResourceUrl: `${root}/games/`
    },
    Character: {
      entityResourceUrl: `${root}/characters/`,
      collectionResourceUrl: `${root}/characters/`
    },
    VoiceActor: {
      entityResourceUrl: `${root}/voiceActor/`,
      collectionResourceUrl: `${root}/voiceActor/`
    },
    Weapon: {
      entityResourceUrl: `${root}/weapons/`,
      collectionResourceUrl: `${root}/weapons/`
    }
  }
};
