import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './component/cliente/cliente.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: CadastroComponent},
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/:id', component: ClienteComponent}//Para requisição pelo id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
