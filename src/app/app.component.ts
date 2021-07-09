import { Component, OnInit } from '@angular/core';
import { StravaService } from './strava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  errorMessage: string;
  athlete: any;
  stats: any;
  friends: any;
  emailId: string;

  constructor(private stravaService: StravaService, private router: Router) {
  }

  ngOnInit() {

  }

  checkRunnerDetail(email) {
    this.stravaService.checkEmailFromDB(email).subscribe((data) => {
      if (data.length === 0) {
        window.location.href = `https://www.strava.com/oauth/authorize?client_id=24114&redirect_uri=http://localhost:4200/strava/${this.emailId}&response_type=code&scope=activity:read_all`;
      } else {
        this.stravaService.clientRefreshToken = data[0].token;
        this.router.navigate(['/runnerDetails']);
      }
    })
  }
}
