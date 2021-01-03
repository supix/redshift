import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDeskFakeService {

  constructor() { }

  public canEditShifts(manName: string): boolean {
    const manNamesAllowedToBeEdited = [
      'Mario Rossi',
      'Giuseppe Verdi'
    ];
    if (manNamesAllowedToBeEdited.includes(manName)) {
      return true;
    }
  }
}
