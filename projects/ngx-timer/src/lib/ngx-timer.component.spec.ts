import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimerComponent } from './ngx-timer.component';

describe('NgxTimerComponent', () => {
  let component: NgxTimerComponent;
  let fixture: ComponentFixture<NgxTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
