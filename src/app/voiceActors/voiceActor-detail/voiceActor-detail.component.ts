import {
    Component,
    Input,
    EventEmitter,
    OnChanges,
    Output,
    SimpleChanges,
    ChangeDetectionStrategy
  } from '@angular/core';
  
  import { VoiceActor } from '../../core';
  
  @Component({
    selector: 'app-voiceactor-detail',
    templateUrl: './voiceactor-detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class VoiceActorDetailComponent implements OnChanges {
    @Input() voiceactor: VoiceActor;
    @Output() unselect = new EventEmitter<string>();
    @Output() save = new EventEmitter<VoiceActor>();
  
    addMode = false;
    editingVoiceActor: VoiceActor;

    ngOnChanges(){}
    
    clear() {
      this.unselect.emit();
    }
  
    saveVoiceActor() {
      this.save.emit(this.editingVoiceActor);
      this.clear();
    }
  }
  