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
        this.tarefaService.getUsuarioById(id).subscribe(
          (usuario) => {
            if (usuario) {
              this.usuario = usuario;
            } else {
              this.router.navigate(['/lista-usuarios']);
            }
          },
          (error) => {
            console.error('Erro ao buscar o usuário:', error);
            this.router.navigate(['/lista-usuarios']);
          }
        );
      }
    }

  editarUsuario(id: string){
    this.router.navigate(['../editar-usuario', id]);
  }

  excluirUsuario(id: string): void {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.tarefaService.deletarUsuario(id).subscribe({
        next: () => {
          alert('Usuário excluído com sucesso!');
          this.router.navigate(['../lista-clientes']);
        },
        error: (err) => {
          console.error('Erro ao excluir usuário:', err);
          alert('Erro ao tentar excluir o usuário. Tente novamente.');
        },
      });
    }
}
}
