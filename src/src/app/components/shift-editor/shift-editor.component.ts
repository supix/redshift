import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shift-editor',
  templateUrl: './shift-editor.component.html',
  styleUrls: ['./shift-editor.component.css']
})
export class ShiftEditorComponent implements OnInit {
@Input() editHandler: { manCode: string; day: Date };
@Input() curShift: string;
@Input() allShifts: string[];
@Output() shiftChanged = new EventEmitter<{ manCode: string; day: Date; newShift: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onChanged(event): void {
    this.shiftChanged.emit({ manCode: this.editHandler.manCode, day: this.editHandler.day, newShift: event});
  }
}
