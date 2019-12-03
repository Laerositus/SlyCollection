import { Game } from './game';
import { VoiceActor } from './voiceActor';
import { Weapon } from './weapon';

export class Character {
    id: number;
    name: string;
    born: number;
    inGames: Game[];
    species: string;
    relationship: Character;
    weapon: Weapon;
    voicedBy: VoiceActor;
    moreInfo: string;
}