import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todolist',
  templateUrl: 'todolist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @Output() onTodoChanged = new EventEmitter<Todo>();

  @Input() todolist: Todo[];

  toggleDone(completed: boolean, todo: Todo) {
    this.onTodoChanged.emit({...todo, done: completed});
  }

}
