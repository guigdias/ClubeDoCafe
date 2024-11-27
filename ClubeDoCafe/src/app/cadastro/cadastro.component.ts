import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa, createUsuario } from '../models/tarefa.model';
import { TarefaService } from '../services/tarefa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario: Tarefa = createUsuario();

  constructor(private tarefaService: TarefaService, private router: Router) {}

  cadastrar() {
    this.tarefaService.cadastrar(this.usuario);
    alert(`Usuário ${this.usuario.nome} cadastrado com sucesso!`);
    this.router.navigate(['/']);
  }
}
