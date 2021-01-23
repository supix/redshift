import { Routes } from '@angular/router';
import { ShiftsComponent } from './components/shifts/shifts.component';

export const routes: Routes = [
    { path: 'shifts', component: ShiftsComponent },
    // { path: 'calendar', component: ShiftsComponent },
    { path: '',   redirectTo: '/shifts?group=Interni', pathMatch: 'full' }
    // { path: '**', component: PageNotFoundComponent }
]