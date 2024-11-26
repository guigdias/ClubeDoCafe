import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private usuarios: Tarefa[] = [{
    id: "1325",
    nome: 'Guilherme',
    datanascimento: new Date(),
    email: 'guilherme@email.com',
    senha: '12345',
    celular: "31999735983",
    cpf: '11234565432',
    cep: "31130090",
    endereco: 'Rua ABC',
    numero: "123",
    complemento: '111',
    cidade: 'Belo Horizonte',
    uf: 'MG'
  }];
  private ultimoUsuario: Tarefa | null = null;

  cadastrar(usuario: Tarefa) {
    usuario.id = (Math.random() * 10000).toFixed(0);
    this.usuarios.push(usuario);
    this.ultimoUsuario = usuario;
  }

  getUsuarios(): Tarefa[] {
    return this.usuarios;
  }


  getUltimoUsuario(): Tarefa | null {
    return this.ultimoUsuario;
  }

  login(cpf: string, senha: string): boolean {
    for(const usuario of this.usuarios)
    {
      if(usuario.cpf === cpf)
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
}
