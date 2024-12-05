import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../../store/products/products.actions';
import * as ProductSelectors from '../../../store/products/products.selectors';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
  standalone: true,
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  imports: [CommonModule, FormComponent]
})
export class ProductFormComponent implements OnChanges {
  @Input() product: any = null;
  model: any = {};

  fields = [
    { name: 'Name', type: 'text', value: '' },
    { name: 'Price', type: 'number', value: 0 },
    { name: 'Stock', type: 'number', value: 0 },
  ];

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      console.log('Producto recibido:', this.product); // Verifica que el producto se recibe correctamente

      this.fields = [
        { name: 'Name', type: 'text', value: this.product.name || '' },
        { name: 'Price', type: 'number', value: this.product.price || 0 },
        { name: 'Stock', type: 'number', value: this.product.stock || 0 },
      ];
    }
  }

  onSubmit(data: any) {
    if (this.product) {
      const updatedProduct = {
        ...this.product,
        name: data.Name,
        price: Number(data.Price),
        stock: Number(data.Stock),
      };
  
      this.store.dispatch(ProductActions.updateProduct({ product: updatedProduct }));
      this.product = null;
      this.fields.forEach(field => field.value = ''); 
    } else {
      const newProduct = {
        id: Date.now(),
        name: data.Name,
        price: Number(data.Price),  
        stock: Number(data.Stock),  
      };
  
      this.store.dispatch(ProductActions.addProduct({ product: newProduct }));
    }
  }

  onDelete() {
    if (this.product) {
      const productId = this.product.id;
      console.log('Eliminando producto con id:', productId);
      this.store.dispatch(ProductActions.deleteProduct({ id: productId }));

      this.product = null; 
      this.fields.forEach(field => field.value = '');
    }
  }
}
