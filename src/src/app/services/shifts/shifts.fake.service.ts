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
        new Date(2021, 0, 1),
        'F',
        'Ferie',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 2),
        'F',
        'Ferie',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 3),
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
        new Date(2021, 0, 4),
        'F',
        'Ferie',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 5),
        'C',
        'Centrale',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 7),
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
        new Date(2021, 0, 9),
        'G',
        'Giornata piena',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 10),
        'G',
        'Giornata piena',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 11),
        'K',
        'Kubernetes',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 15),
        'K',
        'Kubernetes',
        null,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 16),
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

  public shifts$(fromDate: Date, toDate: Date, manGroups: string[]): Observable<ManShift[]> {
    return of(fakeData.filter(ms => manGroups.length === 0 || !!manGroups.find(mg => mg === ms.tipo_turnista)));
  }
}
