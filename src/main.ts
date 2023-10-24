import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { installPatch } from './app/shared/patch/monkey-patch';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
installPatch();

