import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shifts-container',
  templateUrl: './shifts-container.component.html',
  styleUrls: ['./shifts-container.component.css']
})
export class ShiftsContainerComponent implements OnInit {
  groups: string[];

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.groups = !!params.group ?
        Array.isArray(params.group) ? params.group : [params.group]
        : [];
    });
  }

}
