import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  usuario: Tarefa = {
    id: '',
    nome: '',
    datanascimento: new Date(),
    email: '',
    senha: '',
    telefone: '',
    cpf: '',
    cep: '',
    endereco: '',
    bairro: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: '',
    genero: '',
    tipousuario: ''
  };

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute,
    private cepService: CepService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tarefaService.getUsuarioById(id).subscribe(
        (usuario) => {
          if (usuario) {
            this.usuario = usuario;
          } else {
            this.router.navigate(['/not-found']);
          }
        },
        (error) => {
          console.error('Erro ao buscar o usuário:', error);
          this.router.navigate(['/not-found']);
        }
      );
    }
  }

  atualizarUsuario(): void {
    this.tarefaService.atualizarUsuario(this.usuario).subscribe({
      next: () => {
        alert('Usuário atualizado com sucesso!');
        this.router.navigate(['/lista-clientes']);
      },
      error: (err) => {
        console.error('Erro ao atualizar o usuário:', err);
        alert('Erro ao atualizar o usuário. Tente novamente.');
      },
    });
  }

  buscarCep(): void {
    if (this.usuario.cep) {
      this.cepService.buscarCep(this.usuario.cep).subscribe({
        next: (dados) => {
          if (dados.logradouro) {
            this.usuario.endereco = dados.logradouro;
            this.usuario.bairro = dados.bairro;
            this.usuario.cidade = dados.localidade;
            this.usuario.uf = dados.uf;
          } else {
            alert('CEP não encontrado!');
          }
        },
        error: () => {
          alert('Erro ao buscar o CEP. Tente novamente.');
        },
      });
    }
  }
}
