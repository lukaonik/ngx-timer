import { InjectionToken, Injectable } from "@angular/core";
import { DiffValue } from "./ngx-timer-options";

@Injectable({ providedIn: "root" })
export class NgxTimerDateAdapter {
  diff(time1, time2): number {
    return new Date(time1).getTime() - new Date(time2).getTime();
  }

  compute(time1, time2): DiffValue {
    const diff = this.diff(time1, time2);

    const totalMillisecond = Math.floor(diff);
    const totalSecond = Math.floor(diff / 1000);
    const totalMinute = Math.floor(diff / 60000);
    const totalHour = Math.floor(diff / 3600000);
    const totalDay = Math.floor(diff / 3600000 / 24);
    const totalMonth = Math.floor(diff / 3600000 / 24 / 30);
    const totalYear = Math.floor(diff / 3600000 / 24 / 365);

    const millisecond = totalMillisecond % 1000;
    const second = totalSecond % 60;
    const minute = totalMinute % 60;
    const hour = totalHour % 24;
    const day = totalDay % 30;
    const month = totalMonth % 12;
    const year = totalYear;

    return {
      totalMillisecond,
      totalSecond,
      totalMinute,
      totalHour,
      totalDay,
      totalMonth,
      totalYear,

      millisecond,
      second,
      minute,
      hour,
      day,
      month,
      year
    };
  }
}
