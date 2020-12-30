import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimes, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { ManShift } from 'src/app/models/shifts/ManShift';
import { ShiftsService } from 'src/app/services/shifts/shifts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  private fromDate: Date;
  private toDate: Date;
  private shiftsData: ManShift[];
  private groups: string[];
  private editingMan: string = null;
  faUser = faUser;
  faPen = faPen;
  faCheckCircle = faCheckCircle;
  faTimes = faTimes;

  constructor(
    private shiftsService: ShiftsService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.groups = !!params.group ?
        Array.isArray(params.group) ? params.group : [params.group]
        : [];
      this.initDates();
      this.shiftsService.shifts$(this.fromDate, this.toDate, this.groups)
        .subscribe(s => this.shiftsData = s);
    });
  }

  /**
   * Maps the shifts data to an array of objects read by the DOM
   * @returns an array of objects with the man information, to be shown in the column headers
   */
  public manInfo(): { name: string; group: string }[] {
    return this.shiftsData.map(s => ({ name: s.turnista, group: s.tipo_turnista }));
  }

  /**
   * Extracts shifts information from the shifts data
   * @returns an array as long as the interval between fromDate and toDate
   */
  public getShiftsInfo(manName: string): { text: string; tooltip: string; holyday: boolean }[] {
    const result: { text: string; tooltip: string; holyday: boolean }[] = [];
    const manShifts = this.shiftsData
      .find(s => s.turnista === manName);

    if (!manShifts) {
      this.calendar().forEach(info => {
        result.push({ text: '', tooltip: '', holyday: info.holyday });
      });

      return result;
    }

    this.calendar().forEach(info => {
      const dayShift = manShifts.presenze
        .find(d => d.data.valueOf() === info.day.valueOf());
      if (!dayShift) {
        result.push({ text: '', tooltip: '', holyday: info.holyday });
      } else {
        result.push({ text: dayShift.turno_abbr, tooltip: dayShift.turno, holyday: info.holyday });
      }
    });
    return result;
  }

  /**
   * computes the initial dates, as the first and the last day of the current month
   */
  private initDates(): void {
    const curDate = new Date();
    this.fromDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    this.toDate = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0);
  }

  /**
   * converts a date in a dat object
   * @returns an objects carrying the holiday information as well
   */
  private dateToObj(day: Date): { day: Date; holyday: boolean } {
    const holyday = [0, 6].indexOf(day.getDay()) >= 0;
    return { day, holyday };
  }

  /**
   * Creates an array of days, as long as the interval between fromDate and toDate
   * @returns the array
   */
  public calendar(): { day: Date; holyday: boolean }[] {
    const year = this.fromDate.getFullYear();
    const month = this.fromDate.getMonth();
    let day = this.fromDate.getDate();
    const result: Date[] = [this.fromDate];

    while (result[result.length - 1] < this.toDate) {
      result.push(new Date(year, month, ++day));
    }

    return result.map(d => this.dateToObj(d));
  }

  /**
   * converts a date into a string to be shown. This method must be removed and converted to a pipe.
   * @param d the date to be converted
   */
  public dateToStr(d: Date): string {
    const dayNames = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
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

  /**
   * Returns the name of the man currently being edited
   */
  public get nowEditingMan(): string {
    return this.editingMan;
  }

  /**
   * Enters the edit mode
   * @param man The man being edited
   */
  public editMan(man: string): void {
    this.editingMan = man;
  }

  /**
   * Save the changes to the man shifts and exits the edit mode
   */
  public saveChanges(): void {
    this.editingMan = null;
  }

  /**
   * Cancel the changes to the man shifts and exits the edit mode
   */
  public cancelChanges(): void {
    this.editingMan = null;
  }
}