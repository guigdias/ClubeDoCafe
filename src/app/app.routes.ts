import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ServicosComponent } from './servicos/servicos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a rota base para /home
  { path: 'home', component: HomeComponent }, // Rota para Home
  { path: 'login', component: LoginComponent }, // Rota para Login
  { path: 'cadastro', component: CadastroComponent }, // Rota para Cadastro
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'servicos', component: ServicosComponent },
];
