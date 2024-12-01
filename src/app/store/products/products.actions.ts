import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/models/product.model';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);
export const addProduct = createAction(
  '[Products] Add Product',
  props<{ product: Product }>()
);
export const updateProduct = createAction(
  '[Products] Update Product',
  props<{ product: Product }>()
);
export const deleteProduct = createAction(
  '[Products] Delete Product',
  props<{ id: number }>()
);
