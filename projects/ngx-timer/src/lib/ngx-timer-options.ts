export type DIRECTION_TYPE = "down" | "up";

export interface NgxTimerOptions {
  autostart: boolean;
  interval: number;
}

export interface DiffValue {
  totalMillisecond: number;
  totalSecond: number;
  totalMinute: number;
  totalHour: number;
  totalDay: number;
  totalMonth: number;
  totalYear: number;

  millisecond: number;
  second: number;
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;
}
