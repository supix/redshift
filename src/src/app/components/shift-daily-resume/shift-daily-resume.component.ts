import { Component, OnInit } from '@angular/core';
import { faHouseUser, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { ShiftsDataService } from 'src/app/services/shifts-data/shifts-data.service';
import { DayInfo } from '../shifts/DayInfo';
import { ShiftCounts } from './ShiftCounts';

@Component({
  selector: '[app-shift-daily-resume]',
  templateUrl: './shift-daily-resume.component.html',
  styleUrls: ['./shift-daily-resume.component.css']
})
export class ShiftDailyResumeComponent implements OnInit {
  daysToShow: DayInfo[];
  faHouseUser = faHouseUser;
  faUniversity = faUniversity;

  constructor(
    private readonly shiftsDataService: ShiftsDataService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.daysToShow = this.shiftsDataService.daysToShow;
  }

  public getShiftsCount(d: Date): ShiftCounts[] {
    return [
      new ShiftCounts('M', 'Mattina', 5),
      new ShiftCounts('P', 'Pomeriggio', 4),
      new ShiftCounts('N', 'Notte', 2),
    ]
  }

  public getOffsetCount(d: Date): number[] {
    return [2, 5];
  }
}
