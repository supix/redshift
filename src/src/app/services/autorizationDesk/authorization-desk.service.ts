import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDeskService {

  constructor() { }

  public canEditShifts(manName: string): boolean {
    throw new Error('Method not implemented');
  }
}
