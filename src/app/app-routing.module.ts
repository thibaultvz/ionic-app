import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.gard';

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
    canActivate: [AuthGuard], // Protection de la route
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./components/timer/timer.module').then((m) => m.TimerModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-exercise',
    loadChildren: () =>
      import('./components/new-exercise/new-exercise.module').then(
        (m) => m.NewExerciseModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./components/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./components/history/history.module').then(
        (m) => m.HistoryModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
