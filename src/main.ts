import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

(self as any).MonacoEnvironment = {
  getWorkerUrl: function (moduleId: string, label: string) {
    return 'vs/base/worker/workerMain.js';
  },
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
