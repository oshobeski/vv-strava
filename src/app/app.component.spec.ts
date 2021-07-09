// import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('appComponentTestSuit', () => {
//   let fixture: ComponentFixture<AppComponent>, app: AppComponent;
//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [AppComponent]
//     }).compileComponents();
//     fixture = TestBed.createComponent(AppComponent)
//     app = fixture.componentInstance;
//   }))

//   it('should verify componnet loaded', () => {
//     expect(app).toBeDefined();
//   });

//   it('should verify title name match', () => {
//     expect(app.title).toEqual('strava-vv');
//   });

//   it('should match the welcome title equal', () => {
    
//     fixture.detectChanges();
//     fixture.whenStable().then(()=>{
//       let welcomeValue = fixture.nativeElement.querySelector('#welcome').innerHTML;
//       expect(welcomeValue).toEqual('strava-vv');
//     })
    
//   })

//   it('should verfiy the click function call', (done) => {
//     let spyon = spyOn(app, 'changeName').and.callThrough();
//     fixture.nativeElement.querySelector('#welcome').click();
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       expect(spyon).toHaveBeenCalled();
//       let welcomeValue = fixture.nativeElement.querySelector('#welcome').innerHTML;
//       expect(welcomeValue).toEqual('welcome to strava-vv');
//       done();
//     })
//   })
// })

import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
