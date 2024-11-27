import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Tarefa = {
    id: Math.floor(Math.random() * 110000).toString(),
    nome: '',
    datanascimento: new Date('dd/mm/yyyy'),
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
    genero: ''
  };


  definirGenero(genero: string)
  {
    this.usuario.genero;
  }
  genero = ['Masculino', 'Feminino', 'Outros'];

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuario = this.tarefaService.getUsuarioById(id) || this.usuario;
    }

    if (!this.usuario) {
      this.router.navigate(['/not-found']);
    }
  }

  AtualizarUsuario(){
    if(this.usuario){
      this.tarefaService.AtualizarUsuario(this.usuario);
      this.router.navigate(['../lista-clientes']);
    }
  }
}
