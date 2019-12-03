import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeaponsComponent } from './weapons/weapons.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component'; 
import { WeaponDetailComponent } from './weapon-detail/weapon-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: WeaponsComponent,
  }
]

@NgModule({
  declarations: [WeaponsComponent, WeaponListComponent, WeaponDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, WeaponsComponent]
})
export class WeaponsModule { }
