import { Injectable } from '@angular/core';
import { TodoListStorageService } from '../todo-list-storage/todo-list-storage.service';


@Injectable()
export class TodoListService {

  private todoList = [];

  constructor(private storage:TodoListStorageService) {}

  getTodoList() {
    return this.storage.get();
  }
  addItem(item): any[] {
    return this.storage.post(item);
    }
  removeItem(item) {
  return this.storage.destroy(item);
  }
}
