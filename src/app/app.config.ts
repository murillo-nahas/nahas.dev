import { ApplicationConfig, provideBrowserGlobalErrorListeners, SecurityContext } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideMarkdown, SANITIZE } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideMarkdown({
      sanitize: { provide: SANITIZE, useValue: SecurityContext.NONE },
    }),
  ]
};
