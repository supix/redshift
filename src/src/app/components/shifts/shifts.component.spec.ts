import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DtosPipe } from 'src/app/pipes/dtos/dtos.pipe';
import { TextEllipsisPipe } from 'src/app/pipes/text-ellipsis/text-ellipsis.pipe';
import { AuthorizationDeskFakeService } from 'src/app/services/autorizationDesk/authorization-desk.fake.service';
import { AuthorizationDeskService } from 'src/app/services/autorizationDesk/authorization-desk.service';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { CalendarFakeService } from 'src/app/services/calendar/calendar.service.fake';
import { ShiftsFakeService } from 'src/app/services/shifts/shifts.fake.service';
import { ShiftsService } from 'src/app/services/shifts/shifts.service';

import { ShiftsComponent } from './shifts.component';

describe('ShiftsComponent', () => {
  let component: ShiftsComponent;
  let fixture: ComponentFixture<ShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShiftsComponent,
        DtosPipe,
        TextEllipsisPipe],
      providers: [
        { provide: CalendarService, useClass: CalendarFakeService },
        { provide: ShiftsService, useClass: ShiftsFakeService },
        { provide: AuthorizationDeskService, useClass: AuthorizationDeskFakeService },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftsComponent);
    component = fixture.componentInstance;
    component.groups = ['Interni'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});