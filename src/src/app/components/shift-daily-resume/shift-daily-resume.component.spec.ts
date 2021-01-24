import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { CalendarFakeService } from 'src/app/services/calendar/calendar.service.fake';
import { ShiftsDataService } from 'src/app/services/shifts-data/shifts-data.service';
import { ShiftsFakeService } from 'src/app/services/shifts/shifts.fake.service';
import { ShiftsService } from 'src/app/services/shifts/shifts.service';

import { ShiftDailyResumeComponent } from './shift-daily-resume.component';

describe('ShiftDailyResumeComponent', () => {
  let component: ShiftDailyResumeComponent;
  let fixture: ComponentFixture<ShiftDailyResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftDailyResumeComponent ],
      providers: [
        { provide: CalendarService, useClass: CalendarFakeService },
        { provide: ShiftsService, useClass: ShiftsFakeService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftDailyResumeComponent);
    component = fixture.componentInstance;
    component.groups = [ 'Interni' ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
