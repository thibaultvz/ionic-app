import { Component } from '@angular/core';
import { TodoItem } from './components/todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  todoItem: TodoItem = { id: 1, title: 'Tâche 1' };

  constructor() {}
}
