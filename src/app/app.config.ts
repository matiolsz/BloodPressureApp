import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestore,
    AngularFirestoreModule,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }, 
    provideAnimationsAsync(),
    MatDialogModule
  ]
};
