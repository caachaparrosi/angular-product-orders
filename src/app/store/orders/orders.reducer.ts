import { createReducer, on } from '@ngrx/store';
import { Order } from '../../shared/models/order.model';
import * as OrderActions from './orders.actions';

export interface OrderState {
  orders: Order[];
}

export const initialState: OrderState = {
  orders: [],
};

export const ordersReducer = createReducer(
    initialState,
    on(OrderActions.loadOrdersSuccess, (state, { orders }) => ({
      ...state,
      orders,
    })),
    on(OrderActions.addOrder, (state, { order }) => ({
      ...state,
      orders: [...state.orders, order],
    })),
    on(OrderActions.updateOrder, (state, { order }) => ({
      ...state,
      orders: state.orders.map(p =>
        p.id === order.id ? { ...p, ...order } : p
      ),
    })),
    on(OrderActions.deleteOrder, (state, { id }) => ({
      ...state,
      orders: state.orders.filter(p => p.id !== id),
    }))
  );
  
