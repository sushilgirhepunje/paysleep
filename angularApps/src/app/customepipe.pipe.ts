import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe'
})
export class CustomepipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
