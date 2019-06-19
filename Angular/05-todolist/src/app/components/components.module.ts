import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ListComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [ListComponent]
})
export class ComponentsModule { }
