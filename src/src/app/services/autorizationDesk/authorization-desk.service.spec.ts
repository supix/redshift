import { TestBed } from '@angular/core/testing';

import { AuthorizationDeskService } from './authorization-desk.service';

describe('AuthorizationDeskServiceService', () => {
  let service: AuthorizationDeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationDeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
