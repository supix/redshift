import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight, faEnvelope, faHouseUser, faUniversity, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-day-report',
  templateUrl: './day-report.component.html',
  styleUrls: ['./day-report.component.css']
})
export class DayReportComponent implements OnInit {
  faHouseUser = faHouseUser;
  faUniversity = faUniversity;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
