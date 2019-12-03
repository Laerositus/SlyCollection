import {
    Component,
    EventEmitter,
    Input,
    Output,
    ChangeDetectionStrategy
  } from '@angular/core';
  import { VoiceActor } from '../../core';
  
  @Component({
    selector: 'app-voiceactor-list',
    templateUrl: './voiceactor-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class VoiceActorListComponent {
    @Input() voiceactors: VoiceActor[];
    @Input() selectedvoiceactor: VoiceActor;
    @Output() deleted = new EventEmitter<VoiceActor>();
    @Output() selected = new EventEmitter<VoiceActor>();
  
    selectvoiceactor(voiceactor: VoiceActor) {
      this.selected.emit(voiceactor);
    }
  
    deletevoiceactor(voiceactor: VoiceActor) {
      this.deleted.emit(voiceactor);
    }
  
    byId(voiceactor: VoiceActor) {
      return voiceactor.id;
    }
  }
  