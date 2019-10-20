import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
import { Todo } from './todo.model';

@Component({
  selector: 'todolist-container',
  templateUrl: 'todolist-container.component.html'
})
export class TodoListContainerComponent {

  todolist = new BehaviorSubject<Todo[]>([
    {
      name: 'Code refactoring',
      done: false
    },
    {
      name: 'Code review',
      done: false
    }
  ]);

  add(todo: Todo) {
    this.todolist.value.push(todo);
    this.todolist.next(this.todolist.value);
  }

  todoChanged(todo: Todo) {
    this.todolist.next(
      this.todolist.value.map(todoRaw => todoRaw.name === todo.name ? todo : todoRaw)
    );
  }
}
