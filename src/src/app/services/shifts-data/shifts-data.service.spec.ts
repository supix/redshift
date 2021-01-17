import { TestBed } from '@angular/core/testing';

import { ShiftsDataService } from './shifts-data.service';

describe('ShiftsDataService', () => {
  let service: ShiftsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
