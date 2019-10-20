import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todolist',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'todolist' },
  {
    path: 'todolist',
    loadChildren: () => import('./todolist/todolist-container.module').then(m => m.TodoListContainerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
