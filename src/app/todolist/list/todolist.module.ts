import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbListModule, NbToggleModule } from '@nebular/theme';
import { TodoListComponent } from './todolist.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbListModule,
    NbToggleModule
  ],
  exports: [TodoListComponent],
  declarations: [TodoListComponent]
})
export class TodoListModule {
}
