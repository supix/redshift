import { Routes } from '@angular/router';
import { DayReportComponent } from './components/day-report/day-report.component';
import { ShiftsContainerComponent } from './components/shifts-container/shifts-container.component';

export const routes: Routes = [
    { path: 'shifts', component: ShiftsContainerComponent },
    { path: 'day-report', component: DayReportComponent },
    // { path: 'calendar', component: ShiftsComponent },
    { path: '', redirectTo: '/day-report', pathMatch: 'full' },
    { path: '**', redirectTo: '/day-report', pathMatch: 'full' }
]