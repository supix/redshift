import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { ShiftsService } from './services/shifts/shifts.service';
import { ShiftsFakeService } from './services/shifts/shifts.fake.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DtosPipe } from './pipes/dtos/dtos.pipe';
import { ShiftEditorComponent } from './components/shift-editor/shift-editor.component';
import { AuthorizationDeskService } from './services/autorizationDesk/authorization-desk.service';
import { AuthorizationDeskFakeService } from './services/autorizationDesk/authorization-desk-service.fake.service';
import { CalendarService } from './services/calendar/calendar.service';
import { CalendarFakeService } from './services/calendar/calendar.service.fake';
import { TextEllipsisPipe } from './pipes/text-ellipsis/text-ellipsis.pipe';
import { ShiftsContainerComponent } from './components/shifts-container/shifts-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiftsComponent,
    NavbarComponent,
    DtosPipe,
    ShiftEditorComponent,
    TextEllipsisPipe,
    ShiftsContainerComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [ 
    { provide: CalendarService, useClass: CalendarFakeService },
    { provide: ShiftsService, useClass: ShiftsFakeService },
    { provide: AuthorizationDeskService, useClass: AuthorizationDeskFakeService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
