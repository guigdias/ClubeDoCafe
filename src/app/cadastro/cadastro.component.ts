import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tarefaService: TarefaService,
    private router: Router,
    private cepService: CepService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: [''],
      datanascimento: [''],
      email: [''],
      senha: [''],
      telefone: [''],
      cpf: [''],
      cep: [''],
      endereco: [''],
      bairro: [''],
      numero: [''],
      complemento: [''],
      cidade: [''],
      uf: [''],
      genero: [''],
      tipousuario: ['comum']
    });
  }

  cadastrarUsuario(): void {
    if (this.cadastroForm.invalid) {
      alert('Formulário inválido! Corrija os erros antes de enviar.');
      return;
    }
    const usuario = this.cadastroForm.getRawValue();
    this.tarefaService.cadastrar(usuario).subscribe({
      next: () => this.router.navigate(['/lista-clientes']),
      error: (err) => {
        console.error('Erro ao cadastrar', err);
        alert('Erro ao cadastrar. Tente novamente mais tarde.');
      },
    });
  }

  buscarCep(): void {
    const cep = this.cadastroForm.get('cep')?.value;
    if (cep && /^\d{8}$/.test(cep)) {
      this.cepService.buscarCep(cep).subscribe({
        next: (dados) => {
          if (dados.logradouro) {
            this.cadastroForm.patchValue({
              endereco: dados.logradouro,
              bairro: dados.bairro,
              cidade: dados.localidade,
              uf: dados.uf,
            });
          } else {
            alert('CEP não encontrado!');
          }
        },
        error: () => alert('Erro ao buscar o CEP. Tente novamente.'),
      });
    }
  }
}
