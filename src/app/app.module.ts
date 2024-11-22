import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';  // Ajoutez l'importation de SharedModule

const routes: Routes = [
  {
    path: '',
    component: TodoItemComponent, // Affiche TodoItemComponent quand la route est vide
  },
  {
    path: 'todo',
    component: TodoItemComponent, // Autre exemple si vous avez d'autres pages
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,  // Déclarez votre composant ici
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),  // Important pour utiliser les composants Ionic
    RouterModule.forRoot(routes),  // Ajoutez cette ligne pour activer les routes
    SharedModule,  // Ajoutez SharedModule pour pouvoir utiliser HeaderComponent et FooterComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
