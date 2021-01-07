import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Day } from 'src/app/models/day/day';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarFakeService {

  constructor() { }

  public calendar$(fromDate: Date, toDate: Date): Observable<Day[]> {
    const year = fromDate.getFullYear();
    const month = fromDate.getMonth();
    let day = fromDate.getDate();
    const result: Date[] = [fromDate];

    while (result[result.length - 1] < toDate) {
      result.push(new Date(year, month, ++day));
    }

    return of(
      result.map(d => {
        const dayNames = environment.dayNames;
        const weekDay = d.getDay();
        const weekDayName = dayNames[weekDay];
        const workingDay = ![0, 6].includes(weekDay);
        const weekNumber = this.getWeekNumber(d);
        const isItToday = d.valueOf() === (new Date()).valueOf();
        return new Day(d, weekDayName, workingDay, weekNumber, isItToday);
      }));
  }

  private getWeekNumber(d: Date): number {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / (24 * 60 * 60 * 1000)) + 1) / 7);
    // Return array of year and week number
    return weekNo;
  }
}
