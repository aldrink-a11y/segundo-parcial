import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // <-- Asegúrate que importe AppComponent

bootstrapApplication(AppComponent, appConfig) // <-- Asegúrate que use AppComponent
  .catch((err) => console.error(err));