import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDeskFakeService {

  constructor() { }

  public canEditShifts(manCode: string): boolean {
    const manNCodesAllowedToBeEdited = [
      'MAN001',
      'MAN003'
    ];
    if (manNCodesAllowedToBeEdited.includes(manCode)) {
      return true;
    }
  }
}
