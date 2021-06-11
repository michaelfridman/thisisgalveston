import { TestBed } from '@angular/core/testing';

import { CourtlistenerHttpService } from './courtlistener-http.service';

describe('CourtlistenerHttpService', () => {
  let service: CourtlistenerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtlistenerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
