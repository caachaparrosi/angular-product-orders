import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { reducers } from './app/store/reducers';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Habilita HttpClient para solicitudes HTTP
    provideStore(reducers), // Configura el Store global con reducers
    provideStoreDevtools({ maxAge: 25, logOnly: false }) // Habilita DevTools en desarrollo
  ],
}).catch((err) => console.error(err));
