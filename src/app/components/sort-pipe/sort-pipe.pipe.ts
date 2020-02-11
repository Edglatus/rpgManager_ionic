import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, args: string): any {
    return value.sort((a, b) => {
      if (a[args] > b[args]) {
        return 1;
      } else if (a[args] < b[args]) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}
