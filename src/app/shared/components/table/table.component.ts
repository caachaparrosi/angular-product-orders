import { Component, Input } from '@angular/core';
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
}
