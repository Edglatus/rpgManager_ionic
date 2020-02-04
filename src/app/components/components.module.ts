import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ExpandableComponent } from './expandable/expandable.component';

@NgModule({
  imports: [IonicModule],
  declarations: [ExpandableComponent],
  exports: [ExpandableComponent]
})

export class ComponentsModule {}
