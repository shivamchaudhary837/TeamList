import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';

import { provideStoreDevtools } from '@ngrx/store-devtools';

import { userReducer } from './store/user/user.reducer';
import { UserEffects } from './store/user/user.effects';
import { provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
    ,provideEffects([UserEffects]),
    provideStore({ user: userReducer }),
    provideStoreDevtools(),
      provideAnimationsAsync()
  ]
};
