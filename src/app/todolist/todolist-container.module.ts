import { NgModule } from '@angular/core';
import { TodoListRoutingModule } from './todolist-routing.module';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { TodoListContainerComponent } from './todolist-container.component';
import { TodoListFilterModule } from './filter/todolist-filter.module';
import { TodoListCreateModule } from './create/todolist-create.module';
import { TodoListModule } from './list/todolist.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    TodoListRoutingModule,
    TodoListFilterModule,
    TodoListCreateModule,
    TodoListModule
  ],
  exports: [],
  declarations: [TodoListContainerComponent]
})
export class TodoListContainerModule {
}
