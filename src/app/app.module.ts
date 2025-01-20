import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'new-exercise',
    loadChildren: () =>
      import('./components/new-exercise/new-exercise.module').then(
        (m) => m.NewExerciseModule
      ),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./components/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./components/history/history.module').then(
        (m) => m.HistoryModule
      ),
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Redirect to the biometric authentication page
  { path: '**', redirectTo: 'auth' }, // Handle undefined routes
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [FingerprintAIO], // Register FingerprintAIO
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
