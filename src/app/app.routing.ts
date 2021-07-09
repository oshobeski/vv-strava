import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OuthstravaComponent } from './outhstrava.component';
import { RunnerDetails } from './runner.detail.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'strava', component: OuthstravaComponent },
  {path: 'runnerDetails', component: RunnerDetails},
  { path: '**', component: OuthstravaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
