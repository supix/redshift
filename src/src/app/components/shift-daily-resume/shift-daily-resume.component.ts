import { Component, Input, OnInit } from '@angular/core';
import { faHouseUser, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { ManShift } from 'src/app/models/shifts/ManShift';
import { ShiftsDataService } from 'src/app/services/shifts-data/shifts-data.service';
import { DayInfo } from '../shifts/DayInfo';
import { ShiftCount } from './ShiftCount';
import { ShiftsResume } from './ShiftsResume';

const offsite_key = 'offsite';
const nooffsite_key = 'no-offsite';

@Component({
  selector: '[app-shift-daily-resume]',
  templateUrl: './shift-daily-resume.component.html',
  styleUrls: ['../shifts-container/shifts-container.component.css', './shift-daily-resume.component.css']
})
export class ShiftDailyResumeComponent implements OnInit {
  @Input() groups: string[];
  daysToShow: DayInfo[];
  faHouseUser = faHouseUser;
  faUniversity = faUniversity;
  resume: ShiftsResume;

  constructor(
    private readonly shiftsDataService: ShiftsDataService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.daysToShow = this.shiftsDataService.daysToShow;
    this.resume = this.computeResume(this.shiftsDataService.shiftsData(this.groups));
  }

  computeResume(manShifts: ManShift[]): ShiftsResume {
    return manShifts.reduce((sr, ms) => {
      return ms.presenze.reduce((sr2, p) => {
        sr2.incShiftCount(p.data, p.turno_abbr);
        sr2.incShiftCount(p.data, p.offsite ? offsite_key : nooffsite_key);
        return sr2;
      }, sr);
    }, new ShiftsResume());
  }

  public getShiftsCount(d: Date): ShiftCount[] {
    return [
      new ShiftCount('M', 'Mattina', this.resume.getShiftCount(d, 'M')),
      new ShiftCount('P', 'Pomeriggio', this.resume.getShiftCount(d, 'P')),
      new ShiftCount('N', 'Notte', this.resume.getShiftCount(d, 'N')),
    ]
  }

  public getOffsetCount(d: Date): number[] {
    return [
      this.resume.getShiftCount(d, nooffsite_key),
      this.resume.getShiftCount(d, offsite_key),
    ];
  }
}
