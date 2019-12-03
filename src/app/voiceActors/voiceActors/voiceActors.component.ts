import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VoiceActor } from '../../core';
import { VoiceActorService } from '../voiceactor.service';

@Component({
    selector: 'app-voiceactors',
    templateUrl: './voiceactors.component.html'
})

export class VoiceActorsComponent implements OnInit {
    selected: VoiceActor;
    voiceactors$: Observable<VoiceActor[]>;
    message = '?';
    voiceactorToDelete: VoiceActor;
    showModal = false;
  
    constructor(
      private voiceactorService: VoiceActorService // , private modalService: ModalService
    ) {
      this.voiceactors$ = voiceactorService.entities$;
    }
  
    ngOnInit() {
      this.getVoiceActors();
    }
  
    add(voiceactor: VoiceActor) {
      this.voiceactorService.add(voiceactor);
    }
  
    askToDelete(voiceactor: VoiceActor) {
      this.voiceactorToDelete = voiceactor;
      this.showModal = true;
      if (this.voiceactorToDelete.name) {
        this.message = `Would you like to delete ${this.voiceactorToDelete.name}?`;
      }
    }
  
    clear() {
      this.selected = null;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
    deleteVoiceActor() {
      this.closeModal();
      if (this.voiceactorToDelete) {
        this.voiceactorService
          .delete(this.voiceactorToDelete.id)
          .subscribe(() => (this.voiceactorToDelete = null));
      }
      this.clear();
    }
  
    enableAddMode() {
      this.selected = <any>{};
    }
  
    getVoiceActors() {
      this.voiceactorService.getAll();
      this.clear();
    }
  
    save(voiceactor: VoiceActor) {
      if (this.selected && this.selected.name) {
        this.update(voiceactor);
      } else {
        this.add(voiceactor);
      }
    }
  
    select(voiceactor: VoiceActor) {
      this.selected = voiceactor;
    }
  
    update(voiceactor: VoiceActor) {
      this.voiceactorService.update(voiceactor);
    }
  }
  