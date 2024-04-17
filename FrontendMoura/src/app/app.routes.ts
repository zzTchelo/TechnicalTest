import { Routes } from '@angular/router';
import { ListarTodosComponent } from './Application/Main/listar-todos/listar-todos.component';
import { PesquisarComponent } from './Application/Main/pesquisar/pesquisar.component';

export const routes: Routes = [
  {path: "ListarTodos", component: ListarTodosComponent},
  {path: "Pesquisar",   component: PesquisarComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  {path: '', redirectTo: 'ListarTodos', pathMatch:'full'}
];
