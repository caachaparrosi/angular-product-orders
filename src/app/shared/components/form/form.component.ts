import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [NgIf, NgFor, FormsModule],
})
export class FormComponent implements OnInit {
  @Input() fields: { name: string; type: string; value?: any }[] = [];
  @Output() submitForm = new EventEmitter<any>();

  model: any = {};

  ngOnInit() {
    this.initializeModel();
  }

  ngOnChanges() {
    this.initializeModel();
  }

  initializeModel() {
    this.model = {};
    this.fields.forEach((field) => {
      this.model[field.name] = field.value || '';
    });
  }

  onSubmit() {
    this.submitForm.emit(this.model);
  }
}
