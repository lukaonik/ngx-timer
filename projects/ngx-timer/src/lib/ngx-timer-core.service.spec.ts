import { TestBed } from '@angular/core/testing';

import { NgxTimerCoreService } from './ngx-timer-core.service';

describe('NgxTimerCoreService', () => {
  let service: NgxTimerCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTimerCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
