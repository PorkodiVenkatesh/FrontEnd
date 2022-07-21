import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDemo'
})
export class PipeDemoPipe implements PipeTransform {

  transform(value: string): string {
    return value[0];
  }

}
