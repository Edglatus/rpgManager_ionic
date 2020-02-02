import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { ApiService } from '../api/api.service';

export abstract class StoreService<T> {
  protected protoList: BehaviorSubject<Array<T>> = new BehaviorSubject(new Array<T>());

  constructor(protected api: ApiService<T>) {
    this.getData();
  }

  protected abstract toArray(res);

  get list() {
    return new Observable(fn => this.protoList.subscribe(fn));
  }

  getData() {
    this.api.getAll()
      .subscribe(
        res => {
          const list = this.toArray(res);
          this.protoList.next(list);
        }
      );
  }

  getOneByID(id: number): Observable<T> {
    if (id !== 0) {
      return this.api.getOneByID(id);
    }
    return null;
  }

  create(newItem: T): Observable<T> {
    const obs = this.api.create(newItem);
    obs.subscribe(res => {
      this.getData();
    });

    return obs;
  }

  delete(id: number): Observable<T> {
    const obs = this.api.delete(id);
    obs.subscribe(res => {
      this.getData();
    });

    return obs;
  }

  update(id: number, entity: T): Observable<T> {
    const obs = this.api.update(id, entity);
    obs.subscribe(res => {
      this.getData();
    });

    return obs;
  }
}
