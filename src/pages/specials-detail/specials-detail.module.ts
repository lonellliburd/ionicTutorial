import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialsDetailPage } from './specials-detail';

@NgModule({
  declarations: [
    SpecialsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialsDetailPage),
  ],
})
export class SpecialsDetailPageModule {}
