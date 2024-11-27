import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { TarefaService } from '../services/tarefa.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  usuario!: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const usuario = this.tarefaService.getUsuarioById(id);
      if (usuario) {
        this.usuario = usuario;
      } else {
        console.error('Usuário não encontrado!');
      }
    }
  }
}
