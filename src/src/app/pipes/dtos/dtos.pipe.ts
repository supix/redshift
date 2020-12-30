import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'dtos'
})
export class DtosPipe implements PipeTransform {

  /**
   * Converts a date into a string to be shown.
   * @param d the date to be converted
   */
  transform(d: Date): string {
    const dayNames = environment.dayNames;
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    const dayName = dayNames[d.getDay()];

    return dayName + ' ' + [day, month].join('/');
  }

}
