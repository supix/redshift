import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManShift } from 'src/app/models/shifts/ManShift';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  constructor() { }

  public shifts$(fromDate: Date, toDate: Date, manGroups: string[]): Observable<ManShift[]> {
    throw new Error('Method not implemented');
  }
}
