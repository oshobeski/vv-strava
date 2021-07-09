import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StravaService } from './strava.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outhstrava',
  template: '',
  styleUrls: []
})
export class OuthstravaComponent implements OnInit {

  emailId: string = '';
  name: string = '';
  runnerId: string = '';

  constructor(private _activatedRoutes: ActivatedRoute, private _stravaServices: StravaService, private router: Router) { }

  ngOnInit(): void {
    this._activatedRoutes.url.subscribe((url) => {
      this.emailId = url[1].path;
    });
    this._activatedRoutes.queryParams.subscribe((params) => {
      this._stravaServices.client_code = params['code'];
    });
    if (this.emailId && this._stravaServices.client_code) {
      this.getToken()
    }
  }

  getToken(): void {
    this._stravaServices.getAccessToken().subscribe((data) => {
      this.name = data.athlete.firstname + data.athlete.lastname;
      this._stravaServices.clientRefreshToken = data.refresh_token;
      this.runnerId = data.athlete.id;
      this._stravaServices.insertAccessToken(this.runnerId, this.emailId, this.name, data.refresh_token)
        .subscribe((resp) => {
          this.router.navigate(['/runnerDetails']);
          // todo handle save scenario
        })
    })
  }

}
