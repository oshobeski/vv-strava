import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StravaService } from './strava.service';
import { AppComponent } from './app.component';
import { RunnerDetails } from './runner.detail.component';
import { AppRoutingModule } from './app.routing';
import { OuthstravaComponent } from './outhstrava.component';

@NgModule({
  declarations: [
    AppComponent,
    RunnerDetails,
    OuthstravaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StravaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
