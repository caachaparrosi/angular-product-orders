// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { OrderService } from '../../features/orders/services/order.service';
// import { loadOrders, loadOrdersSuccess } from './orders.actions';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { inject } from '@angular/core';

// @Injectable()
// export class OrderEffects {
//   // Inyección usando inject()
//   private actions$ = inject(Actions);
//   private orderService = inject(OrderService);

//   // Efecto para cargar orderos
//   loadOrders$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadOrders),
//       mergeMap(() =>
//         this.orderService.getOrders().pipe(
//           map(orders => loadOrdersSuccess({ orders })),
//           catchError(error => {
//             console.error('Error cargando orderos:', error);
//             return of({ type: '[Order API] Load Orders Failed', error });
//           })
//         )
//       )
//     )
//   );


// }
