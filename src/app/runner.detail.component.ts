import { Component, OnInit } from '@angular/core';
import { StravaService } from './strava.service';

@Component({
  selector: 'app-root',
  templateUrl: './runner.detail.component.html',
  styleUrls: ['./runner.detail.component.css']
})

export class RunnerDetails implements OnInit {
  errorMessage: string;
  athlete: any;
  stats: any;
  friends: any;
  emailId: string;
  activities: any;
  header: any = ['Sno', 'Activity Name', 'Activity Type', 'Distance', 'Activity Date'];

  constructor(private stravaService: StravaService) {
  }

  ngOnInit() {
    this.getAthlete();
  }

  getActivities() {
    const before = Math.floor((new Date('2021/07/30').getTime() - new Date('2021/07/30').getMilliseconds()) / 1000);
    const after = Math.floor((new Date('2021/07/01').getTime() - new Date('2021/07/01').getMilliseconds()) / 1000);
    this.stravaService.before = before;
    this.stravaService.after = after;
    this.stravaService.getRefreshToken('activities', null).subscribe(obj => {
      this.activities = obj;
    })
  }

  getAthlete() {
    this.stravaService.getRefreshToken('athlete').subscribe(obj => {
      this.athlete = obj;
      this.getStats(obj.id);
    },
      error => this.errorMessage = <any>error);
  }

  getStats(id) {
    this.stravaService.getRefreshToken('stats', id).subscribe(obj => {
      this.stats = this.stats = obj;
      this.getActivities();
    })
  }

  getFriends(id) {
    return new Promise((resolve, reject) => {
      this.stravaService.getFriends(id)
        .subscribe(
          friends => this.friends = friends,
          error => this.errorMessage = <any>error);
    });
  }
}
