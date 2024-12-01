import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../../shared/components/form/form.component'; 

@Component({
  standalone: true,
  selector: 'app-order-form',
  imports: [CommonModule, FormComponent],  
  templateUrl: './order-form.component.html',
})
export class OrderFormComponent {
  fields = [
    { name: 'Product ID', type: 'number' },
    { name: 'Quantity', type: 'number' }
  ];

  onSubmit(data: any) {
    console.log('Pedido creado/actualizado:', data);
  }
}
