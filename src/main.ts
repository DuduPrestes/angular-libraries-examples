import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/pages/home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './app/pages/reactive-forms/reactive-forms.component';
import { AGGridExampleComponent } from './app/pages/ag-grid-example/ag-grid-example.component';

import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community';
import { ChartExampleComponent } from './app/pages/chart-example/chart-example.component';

ModuleRegistry.registerModules([AllCommunityModule]);
provideGlobalGridOptions({ theme: "legacy" });

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'home', component: HomeComponent },
      { path: 'chart-example', component: ChartExampleComponent },
      { path: 'reactive-form', component: ReactiveFormsComponent },
      { path: 'ag-grid', component: AGGridExampleComponent }
    ]),
    importProvidersFrom(RouterModule)
  ],

}).catch(err => console.error(err));
