import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductSelectors from '../../../store/products/products.selectors';
import * as ProductActions from '../../../store/products/products.actions';
import { TableComponent } from '../../../shared/components/table/table.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule,TableComponent]
})
export class ProductListComponent  implements OnInit  {
  products$: Observable<any>;
  @Output() selectProduct = new EventEmitter<any>();
  selectedProduct: any;

  constructor(private store: Store) {
    this.products$ = this.store.select(ProductSelectors.selectAllProducts);
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  onRowSelected(product: any) {
    this.selectedProduct = product;
    this.selectProduct.emit(product);
  }
}
