import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private usuarios: Tarefa[] = [
    {
    id: "101325",
    nome: 'Carlos Pereira',
    datanascimento: new Date(),
    email: 'carlos@email.com',
    senha: '12345',
    telefone: "(31) 98765-4321",
    cpf: '19867034506',
    cep: "31187023",
    endereco: 'Praça da Liberdade',
    bairro: 'Savassi',
    numero: "789",
    complemento: 'Casa',
    cidade: 'Belo Horizonte',
    uf: 'MG',
    genero: 'Masculino'
    },
    {
      id: "101326",
      nome: 'João Santos',
      datanascimento: new Date('1985-08-10'),
      email: 'joao.santos@email.com',
      senha: 'joao2023',
      telefone: "(11) 91234-5678",
      cpf: '45678901234',
      cep: "01310100",
      endereco: 'Rua Augusta',
      bairro: 'Consolação',
      numero: "150",
      complemento: 'Escritório 12',
      cidade: 'São Paulo',
      uf: 'SP',
      genero: 'Masculino'
    },
    {
      id: "101327",
      nome: 'Maria Oliveira',
      datanascimento: new Date('1990-03-15'),
      email: 'maria@email.com',
      senha: 'senha123',
      telefone: "(21) 99876-5432",
      cpf: '34567890123',
      cep: "22041010",
      endereco: 'Av. Atlântica',
      bairro: 'Copacabana',
      numero: "456",
      complemento: 'Apto 302',
      cidade: 'Rio de Janeiro',
      uf: 'RJ',
      genero: 'Feminino'
    }
  ];
  private ultimoUsuario: Tarefa | null = null;

  cadastrar(usuario: Tarefa) {
    usuario.id = (Math.random() * 110000).toFixed(0);
    this.usuarios.push(usuario);
    this.ultimoUsuario = usuario;
  }

  getUsuarios(): Tarefa[] {
    return this.usuarios;
  }

  getUltimoUsuario(): Tarefa | null {
    return this.ultimoUsuario;
  }

  login(email: string, senha: string): boolean {
    for(const usuario of this.usuarios)
    {
      if(usuario.email === email)
      {
        if(usuario.senha === senha)
        {
          this.ultimoUsuario = usuario;
          return true;
        }
      }
    }
    return false
  }

  getUsuarioById(id: string): Tarefa | undefined {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  deleteUsuario(id: string){
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }

  AtualizarUsuario(usuarioAtualizado: Tarefa)
  {
    const index = this.usuarios.findIndex(usuario => usuario.id === usuarioAtualizado.id);
    if (index !== -1) {
      this.usuarios[index] = usuarioAtualizado;
    }
  }
}


