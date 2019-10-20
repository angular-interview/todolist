import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListFilterComponent } from './todolist-filter.component';
import { NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbInputModule
  ],
  exports: [TodoListFilterComponent],
  declarations: [TodoListFilterComponent]
})
export class TodoListFilterModule {
}
