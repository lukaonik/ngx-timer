import { TestBed } from '@angular/core/testing';

import { NgxTimerService } from './ngx-timer.service';

describe('NgxTimerService', () => {
  let service: NgxTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
