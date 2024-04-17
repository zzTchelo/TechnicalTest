import { Routes } from '@angular/router';
import { ListarTodosComponent } from './Application/Main/listar-todos/listar-todos.component';
import { PesquisarComponent } from './Application/Main/pesquisar/pesquisar.component';
import { CadastrarPessoaComponent } from './Application/Main/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './Application/Main/editar-pessoa/editar-pessoa.component';

export const routes: Routes = [
  {path: '', redirectTo: 'ListarTodos', pathMatch:'full'},
  {path: "ListarTodos", component: ListarTodosComponent},
  {path: "Pesquisar",   component: PesquisarComponent},
  {path: "Cadastrar", component: CadastrarPessoaComponent},
  {path: "Alterar/:id", component: EditarPessoaComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  //{path: "ListarTodos", component: ListarTodosComponent},
  {path: '**', redirectTo: 'ListarTodos', pathMatch:'full'},
];
