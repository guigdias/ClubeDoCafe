import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {
  usuarios: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.usuarios = this.tarefaService.getUsuarios();
  }
}
