import { Injectable, Inject } from "@angular/core";
import { NgxTimerOptions, DiffValue } from "./ngx-timer-options";
import { Subject, Subscription, timer } from "rxjs";
import { NgxTimerDateAdapter } from "./ngx-timer-date-adapter";

const TICK_UPDATE = 0;

@Injectable()
export class NgxTimerCoreService {
  private _option: NgxTimerOptions;

  _tick$ = new Subject<DiffValue>();

  _start$ = new Subject();

  _stop$ = new Subject();

  endTime: Date;

  private sub: Subscription = new Subscription();

  get tick$() {
    return this._tick$.asObservable();
  }

  get start$() {
    return this._start$.asObservable();
  }

  get stop$() {
    return this._stop$.asObservable();
  }

  get options() {
    return this._option;
  }

  constructor(private adapter: NgxTimerDateAdapter) {}

  restart(option: NgxTimerOptions = null) {
    if (option) {
      this.tryValidate(option);
      this._option = option;

      const addedDate = new Date();
      addedDate.setMilliseconds(this._option.interval);
      this.endTime = addedDate;
    }
    if (this._option.autostart) {
      this.start();
    }
  }

  private tryValidate(option: NgxTimerOptions) {}

  start() {
    this._start$.next();

    this.sub.add(
      timer(0, TICK_UPDATE).subscribe(() => {
        const diff = this.adapter.compute(this.endTime, new Date());

        if (diff.millisecond < 0) {
          this.stop();
          for (var key in diff) {
            diff[key] = 0;
          }
        }

        this._tick$.next(diff);
      })
    );
  }

  stop() {
    this._stop$.next();
    this.sub.unsubscribe();
  }

  destroy() {
    this.stop();
  }
}
