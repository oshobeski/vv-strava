import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuthstravaComponent } from './outhstrava.component';

describe('OuthstravaComponent', () => {
  let component: OuthstravaComponent;
  let fixture: ComponentFixture<OuthstravaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuthstravaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuthstravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
