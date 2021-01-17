import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftDailyResumeComponent } from './shift-daily-resume.component';

describe('ShiftDailyResumeComponent', () => {
  let component: ShiftDailyResumeComponent;
  let fixture: ComponentFixture<ShiftDailyResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftDailyResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftDailyResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
