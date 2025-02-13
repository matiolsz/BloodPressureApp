import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import { getAuth } from '@firebase/auth';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  