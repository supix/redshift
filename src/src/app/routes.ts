import { Routes } from '@angular/router';
import { ShiftsContainerComponent } from './components/shifts-container/shifts-container.component';

export const routes: Routes = [
    { path: 'shifts', component: ShiftsContainerComponent },
    // { path: 'calendar', component: ShiftsComponent },
    { path: '', redirectTo: '/shifts?group=Interni', pathMatch: 'full' },
    { path: '**', redirectTo: '/shifts?group=Interni', pathMatch: 'full' }
]