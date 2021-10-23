import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPip',
})
export class PipesPipe implements PipeTransform {
  transform(value: boolean): string {
    console.log(value, 'This Value');
    if (value) {
      return 'Done';
    } else return 'In Progress';
  }
}
