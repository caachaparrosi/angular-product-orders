import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports: [NgIf, NgFor] 
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() rows: any[] = [];
  @Output() rowSelected = new EventEmitter<any>();

  onRowClick(row: any) {
    this.rowSelected.emit(row);
  }
}
