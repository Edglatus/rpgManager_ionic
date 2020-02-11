import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { ExpandableComponent } from './expandable/expandable.component';
import { SearchPipe } from './search-pipe/search-pipe.pipe';
import { SortPipe } from './sort-pipe/sort-pipe.pipe';

@NgModule({
  imports: [IonicModule],
  declarations: [ExpandableComponent, SearchPipe, SortPipe],
  exports: [ExpandableComponent, SearchPipe, SortPipe]
})

export class ComponentsModule {}
