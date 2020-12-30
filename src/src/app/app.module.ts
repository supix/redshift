import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { ShiftsService } from './services/shifts/shifts.service';
import { ShiftsFakeService } from './services/shifts/shifts.fake.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiftsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [ { provide: ShiftsService, useClass: ShiftsFakeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
