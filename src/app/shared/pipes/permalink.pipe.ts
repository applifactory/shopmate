import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'permalink'
})
export class PermalinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toLowerCase().replace(/\s+/g,' ').replace(/\W/g, ' ').trim().replace(/\s+/g, '-');
  }

}
