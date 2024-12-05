import { Component } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';
import { OrderFormComponent } from './features/orders/order-form/order-form.component';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductListComponent,
    ProductFormComponent,
    OrderListComponent,
    OrderFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-product-orders';

  selectedProduct: any = null;

  onProductSelected(product: any) {
    console.log('Producto seleccionado:', product);
    this.selectedProduct = product; 
  }

  onFormSubmit(product: any) {
    console.log('Producto guardado:', product);
    this.selectedProduct = null; 
  }

}
