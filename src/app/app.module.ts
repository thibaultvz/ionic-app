import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ajoutez FormsModule ici
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewExerciseComponent } from './components/new-exercise/new-exercise.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SharedModule } from './shared/shared.module';
import { HistoryComponent } from './components/history/history.component';
import { IonicStorageModule } from '@ionic/storage-angular';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-exercise', component: NewExerciseComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'history', component: HistoryComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, // Déclarez vos composants ici
    NewExerciseComponent,
    StatisticsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IonicModule.forRoot(), // Nécessaire pour utiliser les composants Ionic
    RouterModule.forRoot(routes), // Nécessaire pour activer les routes
    IonicStorageModule.forRoot()

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajoutez ce schema pour éviter les erreurs de composants
  bootstrap: [AppComponent],
})
export class AppModule {}
