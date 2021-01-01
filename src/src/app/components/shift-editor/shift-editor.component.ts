import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shift-editor',
  templateUrl: './shift-editor.component.html',
  styleUrls: ['./shift-editor.component.css']
})
export class ShiftEditorComponent implements OnInit {
@Input() editHandler: { manName: string; day: Date };
@Input() curShift: string;
@Input() allShifts: string[];
@Output() shiftChanged = new EventEmitter<{ manName: string; day: Date; newShift: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onChanged(event): void {
    this.shiftChanged.emit({ manName: this.editHandler.manName, day: this.editHandler.day, newShift: event});
  }
}
