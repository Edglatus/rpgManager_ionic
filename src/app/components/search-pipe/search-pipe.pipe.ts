import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<{nome: string}>, args: string): any {
    if (!value) { return []; }
    if (!args) { return value; }

    args = args.toLowerCase();
    return value.filter( i => {
      return i.nome.toLowerCase().includes(args);
    });
  }
}
