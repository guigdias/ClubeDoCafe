import { routes } from './../app.routes';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Tarefa } from '../models/tarefa.model';
import { TarefaService } from '../services/tarefa.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  usuario!: Tarefa;
  usuarios: Tarefa[] = [];
  constructor(
    private tarefaService: TarefaService, private route: ActivatedRoute, private router: Router)
    { }



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

  deletarUsuario(id: string){
    this.tarefaService.deleteUsuario(id);
    this.usuarios = this.tarefaService.getUsuarios();
    this.router.navigate(['../lista-clientes']);
  }

  editarUsuario(id: string){
    this.router.navigate(['../editar-usuario', id]);
  }
}
