import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimes, faPen, faUser, faHouseUser, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { ManShift } from 'src/app/models/shifts/ManShift';
import { DayInfo } from './DayInfo';
import { AuthorizationDeskService } from 'src/app/services/autorizationDesk/authorization-desk.service';
import { ManInfo } from './ManInfo';
import { ShiftsDataService } from 'src/app/services/shifts-data/shifts-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
  public readonly allShifts = ['C', 'M', 'P', 'N', 'D', 'F'];
  private groups: string[];
  private editingManCode: string = null;
  private pendingChanges: { manCode: string; day: Date; newShift: string }[] = [];
  faUser = faUser;
  faPen = faPen;
  faCheckCircle = faCheckCircle;
  faTimes = faTimes;
  faHouseUser = faHouseUser;
  faUniversity = faUniversity;

  constructor(
    private readonly shiftsDataService: ShiftsDataService,
    private readonly authorizationDeskService: AuthorizationDeskService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.groups = !!params.group ?
        Array.isArray(params.group) ? params.group : [params.group]
        : [];
    });
  }

  /**
   * Maps the shifts data to an array of objects read by the DOM
   * @returns an array of objects with the man information, to be shown in the column headers
   */
  public manInfo(): ManInfo[] {
    return this.shiftsData.map(s => new ManInfo(s.codice, s.nome, s.cognome, s.gruppi));
  }

  /**
   * Extracts shifts information from the shifts data
   * @returns an array as long as the interval between fromDate and toDate
   */
  public getShiftsInfo(codice: string): { text: string; tooltip: string; offsite: boolean; dayInfo: DayInfo }[] {
    const result: { text: string; tooltip: string; offsite: boolean; dayInfo: DayInfo }[] = [];
    const manShifts = this.shiftsData
      .find(s => s.codice === codice);

    if (!manShifts) {
      this.daysToShow.forEach(info => {
        result.push({ text: '', tooltip: '', offsite: false, dayInfo: info });
      });

      return result;
    }

    this.daysToShow.forEach(info => {
      const dayShift = manShifts.presenze
        .find(d => d.data.valueOf() === info.day.valueOf());
      if (!dayShift) {
        result.push({ text: '', tooltip: '', offsite: false, dayInfo: info });
      } else {
        result.push({ text: dayShift.turno_abbr, tooltip: dayShift.turno, offsite: dayShift.offsite === 1, dayInfo: info });
      }
    });
    return result;
  }

  /**
   * wrapper for the DOM
   */
  public get shiftsData(): ManShift[] {
    return this.shiftsDataService.shiftsData;
  }

  /**
   * wrapper for the DOM
   */
  public get daysToShow(): DayInfo[] {
    return this.shiftsDataService.daysToShow;
  }

  /**
   * Returns the name of the man currently being edited
   */
  public get nowEditingMan(): string {
    return this.editingManCode;
  }

  /**
   * Enters the edit mode
   * @param man The man being edited
   */
  public editMan(manCode: string): void {
    this.editingManCode = manCode;
    this.pendingChanges = [];
  }

  /**
   * Save the changes to the man shifts and exits the edit mode
   */
  public saveChanges(): void {
    this.editingManCode = null;
    console.log('now should save this changes', this.pendingChanges);
    this.pendingChanges = [];
  }

  /**
   * Cancel the changes to the man shifts and exits the edit mode
   */
  public cancelChanges(): void {
    this.editingManCode = null;
    console.log('these changes are going to be canceled', this.pendingChanges);
    this.pendingChanges = [];
  }

  /**
   * Returns the CSS class related to the man group
   * @param c The man class
   */
  public cssClassByGroup(c: string): string {
    switch (c) {
      case 'Interni': return 'badge-success';
      case 'Esterni': return 'badge-warning';
      default: return 'bg-secondary';
    }
  }

  /**
   * Event handler called when a select value is changed by the user.
   * The method tracks the changes and prepares a data structure
   * useful to send the tracked changes to the backend on save
   * request.
   * @param newValue information about the new value
   */
  public onShiftChanged(newValue): void {
    let value = this.pendingChanges.find(c => c.day.valueOf() === newValue.day.valueOf());
    if (!value) {
      value = { manCode: newValue.manCode, day: newValue.day, newShift: newValue.newShift };
      this.pendingChanges.push(value);
    } else {
      value.newShift = newValue.newShift;
    }
    console.log(this.pendingChanges);
  }

  /**
   * Track method used by *ngFor iterating over getShiftsInfo()
   */
  public identifyShiftInfo(_index, item): number {
    return item.dayInfo.day.getTime();
  }

  /**
   * Track method used by *ngFor iterating over manInfo()
   */
  public identifyManInfo(_index, item): string {
    return item.name;
  }

  /**
   * Allows the template to know whether the authenticated user has
   * write privileges on a certain shift.
   * @param manName The name of the man the shifts belong to
   */
  public canEditShifts(manCode: string): boolean {
    return this.authorizationDeskService.canEditShifts(manCode);
  }
}


