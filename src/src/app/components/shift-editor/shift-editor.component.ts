import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-editor',
  templateUrl: './shift-editor.component.html',
  styleUrls: ['./shift-editor.component.css']
})
export class ShiftEditorComponent implements OnInit {
@Input() editHandler: { manName: string; day: Date };
@Input() curShift: string;
@Input() allShifts: string[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.editHandler, this.curShift, this.allShifts);
  }
}
