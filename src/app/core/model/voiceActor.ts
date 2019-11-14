import { Character } from './character';

export class VoiceActor {
    id: number;
    name: string;
    birthday: Date;
    voiceFor: Character[];
    moreInfo: string;
}