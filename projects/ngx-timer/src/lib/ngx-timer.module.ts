import { NgModule } from "@angular/core";
import { NgxTimerComponent } from "./ngx-timer/ngx-timer.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [NgxTimerComponent],
  imports: [CommonModule],
  exports: [NgxTimerComponent]
})
export class NgxTimerModule {}
