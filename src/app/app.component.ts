import { Component } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common'; 
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';
import { OrderFormComponent } from './features/orders/order-form/order-form.component';
import { Store } from '@ngrx/store'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
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
}
