import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; // Importez l'environnement

const routes: Routes = [
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
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IonicModule.forRoot(), // Nécessaire pour Ionic
    RouterModule.forRoot(routes, {
      preloadingStrategy: 'preloadAllModules', // Ajout de preloading
    }),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000', // Stratégie PWA
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Nécessaire pour éviter les erreurs des composants
  bootstrap: [AppComponent],
})
export class AppModule {}
