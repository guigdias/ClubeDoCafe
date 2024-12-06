import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private tarefaService: TarefaService, private router: Router) {}

  login(): void {
    this.tarefaService.login(this.email, this.senha).subscribe({
      next: (usuario) => {
        if (usuario) {
          console.log('Login bem-sucedido:', usuario);
          this.router.navigate(['/home']);
        } else {
          alert('E-mail ou senha incorretos!');
        }
      },
      error: () => {
        alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
      },
    });
  }
}
