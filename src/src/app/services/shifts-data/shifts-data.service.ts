import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DayInfo } from 'src/app/components/shifts/DayInfo';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { ShiftsService } from 'src/app/services/shifts/shifts.service';
import { ManShift } from '../../models/shifts/ManShift';

@Injectable({
  providedIn: 'root'
})
export class ShiftsDataService {
  private fromDate: Date;
  private toDate: Date;
  private theShiftsData: ManShift[];
  private theDaysToShow: DayInfo[];

  constructor(
    private readonly calendarService: CalendarService,
    private readonly shiftsService: ShiftsService) {
    this.initDates();
    this.loadData();
  }

  public setDates(fromDate: Date, toDate: Date): void {
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.loadData();
  }

  private loadData(): void {
    const shifts$ = this.shiftsService.shifts$(this.fromDate, this.toDate, []);
    const calendar$ = this.calendarService.calendar$(this.fromDate, this.toDate);

    forkJoin([shifts$, calendar$]).subscribe(result => {
      this.theShiftsData = result[0];
      this.theDaysToShow = result[1].map<DayInfo>(d =>
        new DayInfo(
          d.date,
          !d.workingDay,
          d.itIsToday,
          d.date.getMonth() === (new Date()).getMonth()
        ));
    });
  }

  /**
   * computes the initial dates, as the first and the last day of the current month. Adds some preceeding and following days.
   */
  private initDates(): void {
    const curDate = new Date();
    this.fromDate = new Date(curDate.getFullYear(), curDate.getMonth(), -6);
    this.toDate = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 6);
  }

  /**
   * Getter for the daysToShow
   */
  public get daysToShow(): DayInfo[] {
    return this.theDaysToShow;
  }

  /**
   * Getter for the shiftsData
   */
  public shiftsData(groups: string[]): ManShift[] {
    return this.theShiftsData
      .filter(s => groups.some(g => s.gruppi.includes(g)));
  }
}
