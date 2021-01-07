import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from 'src/app/models/day/day';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  public calendar$(fromDate: Date, toDate: Date): Observable<Day[]> {
    throw new Error('Method not implemented.');

    /**
     * The returned entities have the following attributes to be mapped:
     *  - data
     *  - giornoSettimana
     *  - feriale
     *  - numeroSettimana
     *  - oggi
     */
  }
}
