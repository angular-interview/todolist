import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListCreateComponent } from './todolist-create.component';
import { NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule
  ],
  exports: [TodoListCreateComponent],
  declarations: [TodoListCreateComponent]
})
export class TodoListCreateModule {
}
