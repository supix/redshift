import { TestBed } from '@angular/core/testing';

import { ShiftsFakeService } from './shifts.fake.service';

describe('ShiftsFakeService', () => {
  let service: ShiftsFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftsFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieves all the men with no group', () => {
    service.shifts$(new Date(2021, 0, 1), new Date(2021, 0, 28), [])
      .subscribe(result => expect(result.length).toBe(3));
  });

  it('retrieves one man with group Interni', () => {
    service.shifts$(new Date(2021, 0, 1), new Date(2021, 0, 28), ['Interni'])
      .subscribe(result => expect(result.length).toBe(1));
  });

  it('retrieves two men with group Esterni', () => {
    service.shifts$(new Date(2021, 0, 1), new Date(2021, 0, 28), ['Esterni'])
      .subscribe(result => expect(result.length).toBe(2));
  });

  it('retrieves only men belonging to group Esterni with group Esterni', () => {
    service.shifts$(new Date(2021, 0, 1), new Date(2021, 0, 28), ['Esterni'])
      .subscribe(result => expect(result.every(s => s.gruppi.includes('Esterni'))));
  });
});
