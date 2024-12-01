import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../../shared/components/form/form.component'; 

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  imports: [CommonModule, FormComponent] 

})
export class ProductFormComponent {
  fields = [
    { name: 'Name', type: 'text' },
    { name: 'Price', type: 'number' },
    { name: 'Stock', type: 'number' }
  ];

  onSubmit(data: any) {
    console.log('Producto creado/actualizado:', data);
  }
}
