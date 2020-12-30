import { Component, OnInit } from '@angular/core';
import { ManShift } from 'src/app/models/shifts/ManShift';
import { ShiftsService } from 'src/app/services/shifts/shifts.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  private fromDate: Date;
  private toDate: Date;
  private shiftsData: ManShift[];

  public manInfo() {
    return this.shiftsData.map(s => ({ name: s.turnista, group: s.tipo_turnista }));
  }

  public getShiftText(manName: string, date: Date): string {
    const manShifts = this.shiftsData
      .find(s => s.turnista === manName);

    if (!manShifts) {
      return '';
    }

    const dayShift = manShifts.presenze
      .find(d => d.data.valueOf() === date.valueOf());

    if (!dayShift) {
      return '';
    }

    return dayShift.turno_abbr;
  }

  constructor(public shiftsService: ShiftsService) {
  }

  ngOnInit(): void {
    this.initDates();
    this.shiftsService.shifts$(this.fromDate, this.toDate)
      .subscribe(s => this.shiftsData = s);
  }

  private initDates(): void {
    const curDate = new Date();
    this.fromDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    this.toDate = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0);
  }

  public calendar(): Date[] {
    const year = this.fromDate.getFullYear();
    const month = this.fromDate.getMonth();
    let day = this.fromDate.getDate();
    const result: Date[] = [this.fromDate];

    while (result[result.length - 1] < this.toDate) {
      result.push(new Date(year, month, ++day));
    }

    return result;
  }

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
}