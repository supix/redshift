import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CalendarFakeService } from './calendar.service.fake';

describe('CalendarFakeService', () => {
  let service: CalendarFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieves all the days in February', () => {
    service.calendar$(new Date(2021, 1, 1), new Date(2021, 1, 28))
      .subscribe(result => expect(result.length).toBe(28));
  });

  it('the first day in February correspondes to the 5th week', () => {
    service.calendar$(new Date(2021, 1, 1), new Date(2021, 1, 28))
      .subscribe(result => expect(result[0].weekNumber).toBe(5));
  });

  it('the last day in February correspondes to the 8th week', () => {
    service.calendar$(new Date(2021, 1, 1), new Date(2021, 1, 28))
      .subscribe(result => expect(result[result.length - 1].weekNumber).toBe(8));
  });
});
