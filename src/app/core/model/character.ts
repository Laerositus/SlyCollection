import { Game } from './game';
import { VoiceActor } from './voiceActor';
import { Equipment } from './equipment';

export class Character {
    id: number;
    name: string;
    born: Date;
    inGames: Game[];
    species: string;
    relationship: Character;
    weapon: Equipment;
    voicedBy: VoiceActor;
    moreInfo: string;
}