import { Game } from './game';
import { Character } from './character';

export class Equipment {
    id: number;
    name: string;
    inGame: Game[];
    users: Character[];
    type: string;
    moreInfo: string;
}