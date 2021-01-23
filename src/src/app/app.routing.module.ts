import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { routes } from './routes';

const theRoutes: Routes = routes;

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(theRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }