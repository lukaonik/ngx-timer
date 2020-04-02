import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxTimerModule } from "projects/ngx-timer/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxTimerModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
