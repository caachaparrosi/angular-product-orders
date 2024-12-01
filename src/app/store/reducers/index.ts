import { ActionReducerMap } from '@ngrx/store';
import { productsReducer, ProductState } from '../products/products.reducer';
import { ordersReducer, OrderState } from '../orders/orders.reducer';

export interface AppState {
  products: ProductState;
  orders: OrderState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  orders: ordersReducer
};
