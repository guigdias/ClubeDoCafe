import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a rota base para /home
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'lista-clientes', component: ListaClientesComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent },
];
