import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ManShift } from 'src/app/models/shifts/ManShift';
import { Presenze } from 'src/app/models/shifts/Presenze';

const fakeData: ManShift[] = [
  new ManShift(
    'MAN001',
    'Mario',
    'Rossi',
    ['Esterni'],
    [
      new Presenze(
        new Date(2021, 0, 1),
        'F',
        'Ferie',
        0,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 2),
        'F',
        'Ferie',
        1,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 3),
        'F',
        'Ferie',
        1,
        'http://url-turno.test.net'
      ),
    ]),
  new ManShift(
    'MAN002',
    'Giuseppe',
    'Verdi',
    ['Esterni', 'II liv.'],
    [
      new Presenze(
        new Date(2021, 0, 4),
        'F',
        'Ferie',
        0,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 5),
        'C',
        'Centrale',
        0,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 7),
        'N',
        'Notte',
        0,
        'http://url-turno.test.net'
      ),
    ]),
  new ManShift(
    'MAN003',
    'Antonio Michele Maria',
    'Perelli Boffa',
    ['Interni'],
    [
      new Presenze(
        new Date(2021, 0, 9),
        'G',
        'Giornata piena',
        1,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 10),
        'G',
        'Giornata piena',
        1,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 11),
        'K',
        'Kubernetes',
        1,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 15),
        'K',
        'Kubernetes',
        1,
        'http://url-turno.test.net'
      ),
      new Presenze(
        new Date(2021, 0, 16),
        'K',
        'Kubernetes',
        1,
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
    return of(fakeData.filter(ms => manGroups.length === 0 || manGroups.some(mg => ms.gruppi.includes(mg))));
  }
}
