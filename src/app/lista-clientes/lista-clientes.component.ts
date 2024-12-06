import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  usuarios: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaService.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
}
