import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as OrderSelectors from '../../../store/orders/orders.selectors';
import * as OrderActions from '../../../store/orders/orders.actions';
import { TableComponent } from '../../../shared/components/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule,TableComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  orders$: Observable<any>;

  constructor(private store: Store) {
    this.orders$ = this.store.select(OrderSelectors.selectAllOrders);
  }

  ngOnInit(): void {
    this.store.dispatch(OrderActions.loadOrders());
  }

}
