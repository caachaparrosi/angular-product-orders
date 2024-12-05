import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { productsReducer } from './store/products/products.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './store/products/products.effects';
import { reducers } from './store/reducers/index';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideStore({
      products: productsReducer, 
    }),
    provideHttpClient(),
    provideEffects([ProductEffects])
  ]
};
