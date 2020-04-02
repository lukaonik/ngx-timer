import {
  Component,
  OnInit,
  Input,
  Inject,
  TemplateRef,
  OnDestroy,
  OnChanges,
  ChangeDetectorRef
} from "@angular/core";
import { NgxTimerCoreService } from "../ngx-timer-core.service";
import { DIRECTION_TYPE, DiffValue } from "../ngx-timer-options";

@Component({
  selector: "ngx-timer",
  templateUrl: "./ngx-timer.component.html",
  styleUrls: ["./ngx-timer.component.scss"],
  providers: [NgxTimerCoreService]
})
export class NgxTimerComponent implements OnInit, OnDestroy, OnChanges {
  @Input("interval")
  interval: number;

  @Input("autostart")
  autostart: boolean;

  @Input("renderTemplate")
  renderTemplate: TemplateRef<HTMLElement>;

  renderContext: {
    $implicit: DiffValue;
  } = {
    $implicit: {
      totalMillisecond: 0,
      totalDay: 0,
      totalHour: 0,
      totalMinute: 0,
      totalMonth: 0,
      totalSecond: 0,
      totalYear: 0,

      millisecond: 0,
      day: 0,
      hour: 0,
      minute: 0,
      month: 0,
      second: 0,
      year: 0
    }
  };

  constructor(
    private ngxTimerCoreService: NgxTimerCoreService,
    private cf: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.ngxTimerCoreService.tick$.subscribe(diff => {
      this.renderContext.$implicit = { ...diff };
      this.cf.markForCheck();
    });
  }

  ngOnChanges() {
    this.ngxTimerCoreService.restart({
      autostart: this.autostart || true,
      interval: this.interval || null
    });
  }

  ngOnDestroy() {
    this.ngxTimerCoreService.destroy();
  }
}
