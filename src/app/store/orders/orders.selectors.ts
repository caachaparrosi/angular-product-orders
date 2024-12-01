import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './orders.reducer';

export const selectOrderState = createFeatureSelector<OrderState>('orders');

export const selectAllOrders = createSelector(
  selectOrderState,
  (state: OrderState) => state.orders
);
