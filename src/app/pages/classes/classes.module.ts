import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassesPageRoutingModule } from './classes-routing.module';

import { ComponentsModule } from '../../components/components.module'

import { ClassesPage } from './classes.page';

import { ClasseDetailComponent } from './classe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ClassesPageRoutingModule
  ],
  declarations: [ClassesPage, ClasseDetailComponent]
})
export class ClassesPageModule {}
