import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(private tarefaService: TarefaService, private router: Router) {}

  login() {
    if (this.tarefaService.login(this.cpf, this.senha)) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/']);
    } else {
      alert('CPF ou senha inválidos.');
    }
  }
}
