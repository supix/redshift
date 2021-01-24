import { TestBed } from '@angular/core/testing';
import { CalendarService } from '../calendar/calendar.service';
import { CalendarFakeService } from '../calendar/calendar.service.fake';
import { ShiftsFakeService } from '../shifts/shifts.fake.service';
import { ShiftsService } from '../shifts/shifts.service';

import { ShiftsDataService } from './shifts-data.service';

describe('ShiftsDataService', () => {
  let service: ShiftsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CalendarService, useClass: CalendarFakeService },
        { provide: ShiftsService, useClass: ShiftsFakeService }
      ]
    });
    service = TestBed.inject(ShiftsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
