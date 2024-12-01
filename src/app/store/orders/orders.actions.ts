import { createAction, props } from '@ngrx/store';
import { Order } from '../../shared/models/order.model';

export const loadOrders = createAction('[Orders] Load Orders');
export const loadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: Order[] }>()
);
export const addOrder = createAction(
    '[Orders] Add Order',
    props<{ order: Order }>()
  );
  export const updateOrder = createAction(
    '[Orders] Update Order',
    props<{ order: Order }>()
  );
  export const deleteOrder = createAction(
    '[Orders] Delete Order',
    props<{ id: number }>()
  );
