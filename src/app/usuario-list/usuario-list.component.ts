import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuariosListComponent {
  usuarios: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.usuarios = this.tarefaService.getUsuarios();
  }
}
