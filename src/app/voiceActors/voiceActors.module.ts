import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { VoiceActorsComponent } from './voiceActors/voiceActors.component';
import { VoiceActorListComponent } from './voiceActor-list/voiceActor-list.component'; 
import { VoiceActorDetailComponent } from './voiceActor-detail/voiceActor-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VoiceActorsComponent,
  }
]

@NgModule({
  declarations: [VoiceActorsComponent, VoiceActorListComponent, VoiceActorDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, VoiceActorsComponent]
})
export class VoiceActorsModule { }
