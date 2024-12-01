import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';  

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [NgIf, NgFor, FormsModule]  
})
export class FormComponent {
  @Input() fields: { name: string; type: string; value?: any }[] = [];
  @Output() submitForm = new EventEmitter<any>();

  model: any = {};

  ngOnInit() {
    this.fields.forEach(field => (this.model[field.name] = field.value || ''));
  }

  onSubmit() {
    this.submitForm.emit(this.model);
  }
}
