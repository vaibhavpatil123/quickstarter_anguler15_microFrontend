import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RootAppComponent } from './app/app.component';

bootstrapApplication(RootAppComponent, appConfig)
  .catch((err) => console.error(err));
