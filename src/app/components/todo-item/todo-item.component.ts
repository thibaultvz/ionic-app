import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface TodoItem {
  id: number;
  title: string;
}

@Component({
  selector: 'app-todo-item',
  template: `
    <ion-item>
      <ion-label>{{ item.title }}</ion-label>
      <ion-button (click)="onDelete()">Delete</ion-button>
    </ion-item>
  `,
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.item.id);
  }
}
