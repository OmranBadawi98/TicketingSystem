import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPip',
})
export class PipesPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): unknown {
    console.log(value, 'This Value');
    if (value) {
      return 'Done';
    } else return 'In Progress';

    // const status = ['In Progress', 'Done'];
    // return status;
  }
}
