import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
  faUser = faUser;

  public manInfo(): { name: string; group: string }[] {
    return this.shiftsData.map(s => ({ name: s.turnista, group: s.tipo_turnista }));
  }

  public getShiftsInfo(manName: string): { text: string; tooltip: string }[] {
    const emptyResult = { text: '', tooltip: '' };
    const result: { text: string; tooltip: string }[] = [];
    const manShifts = this.shiftsData
      .find(s => s.turnista === manName);

    if (!manShifts) {
      this.calendar().forEach(date => {
        result.push(emptyResult);
      });

      return result;
    }

    this.calendar().forEach(date => {
      const dayShift = manShifts.presenze
        .find(d => d.data.valueOf() === date.valueOf());
      if (!dayShift) {
        result.push(emptyResult);
      } else {
        result.push({ text: dayShift.turno_abbr, tooltip: dayShift.turno });
      }
    });
    console.log(result);
    return result;
  }

  constructor(public shiftsService: ShiftsService) {
  }

  ngOnInit(): void {
    this.initDates();
    this.shiftsService.shifts$(this.fromDate, this.toDate, ['Esterno', 'Interno'])
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