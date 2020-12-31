import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-editor',
  templateUrl: './shift-editor.component.html',
  styleUrls: ['./shift-editor.component.css']
})
export class ShiftEditorComponent implements OnInit {
@Input() curShift: string;
@Input() allShifts: string[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.curShift, this.allShifts);
  }
}
