import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-page',
  template: ``
})
export abstract class BaseDetailsComponent<T extends { id: number} > {
  @Input() object: T;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() expandCard = new EventEmitter();

  public expanded: boolean;

  constructor() {
    this.expanded = false;
  }

  emitSave() {
    this.edit.emit(this.object.id);
  }
  emitDelete() {
    this.delete.emit(this.object);
  }
  expand() {
    this.expandCard.emit(this);
  }
}
