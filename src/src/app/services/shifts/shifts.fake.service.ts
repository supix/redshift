import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ManShift } from 'src/app/models/shifts/ManShift';
import { Presenze } from 'src/app/models/shifts/Presenze';

const fakeData: ManShift[] = [
  new ManShift(
    'Mario Rossi',
    'Esterno',
    [
      new Presenze(
        new Date(2020, 11, 1),
        'F',
        'Ferie',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 2),
        'F',
        'Ferie',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 3),
        'F',
        'Ferie',
        null,
        'http://url-turno.test.net'
      ),
    ]),
  new ManShift(
    'Giuseppe Verdi',
    'Esterno',
    [
      new Presenze(
        new Date(2020, 11, 4),
        'F',
        'Ferie',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 5),
        'C',
        'Centrale',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 7),
        'N',
        'Notte',
        null,
        'http://url-turno.test.net'
      ),
    ]),
  new ManShift(
    'Antonio Bianchi',
    'Interno',
    [
      new Presenze(
        new Date(2020, 11, 9),
        'G',
        'Giornata piena',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 10),
        'G',
        'Giornata piena',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 11),
        'K',
        'Kubernetes',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 15),
        'K',
        'Kubernetes',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2020, 11, 16),
        'K',
        'Kubernetes',
        null,
        'http://url-turno.test.net'
      ),
    ]),
];


@Injectable({
  providedIn: 'root'
})
export class ShiftsFakeService {

  constructor() { }

  public shifts$(fromDate: Date, toDate: Date): Observable<ManShift[]> {
    return of(fakeData);
  }
}
