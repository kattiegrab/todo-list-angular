import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListService } from '../todo-list/todo-list.service';
import { ListManagerComponent } from '../list-manager/list-manager.component';


@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
      <p>
        {{ todoItem.title }}
      </p>
      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  constructor(private todoListService: TodoListService) { }

  @Output() remove: EventEmitter<any> = new EventEmitter();

  // removeItem(item) {
  // this.remove.emit(this.item);
  //   }

  ngOnInit() {
  }

}
