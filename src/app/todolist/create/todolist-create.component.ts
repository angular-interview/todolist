import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo.model';

@Component({
  selector: 'todolist-create',
  templateUrl: 'todolist-create.component.html'
})
export class TodoListCreateComponent {

  @Output() onAdd = new EventEmitter<Todo>();

  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = fb.group({
      name: fb.control(null, [Validators.required, Validators.minLength(3)])
    });
  }

  add() {
    this.onAdd.emit({name: this.createForm.get('name').value, done: false});
    this.createForm.patchValue({name: null}, {emitEvent: false});
  }

}
