import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';
import { OrderFormComponent } from './features/orders/order-form/order-form.component';

// Definir las rutas
export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },  
  { path: 'products', component: ProductListComponent },  
  { path: 'products/new', component: ProductFormComponent },  
  { path: 'orders', component: OrderListComponent },  
  { path: 'orders/new', component: OrderFormComponent }, 
];
