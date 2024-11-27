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
  email: string = '';
  senha: string = '';

  constructor(private tarefaService: TarefaService, private router: Router) {}

  login() {
    if (this.tarefaService.login(this.email, this.senha)) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/']);
    } else {
      alert('Email ou senha inválidos.');
    }
  }
}
