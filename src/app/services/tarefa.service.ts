import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Tarefa } from '../models/tarefa.model';
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  // Buscar todos os usuários
  getUsuarios(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  // Buscar um usuário pelo ID
  getUsuarioById(id: string): Observable<Tarefa | null> {
    return this.http.get<Tarefa | null>(`${this.apiUrl}/${id}`);
  }

  // Cadastrar um novo usuário
  cadastrar(usuario: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, usuario);
  }

  // Atualizar um usuário existente
  atualizarUsuario(usuario: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  // Deletar um usuário pelo ID
  deletarUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método de login
  login(email: string, senha: string): Observable<Tarefa | null> {
    const params = new HttpParams().set('email', email).set('senha', senha); // Gerando os parâmetros da requisição

    return this.http.get<Tarefa[]>(this.apiUrl, { params }).pipe(
      map(usuarios => usuarios.length > 0 ? usuarios[0] : null), // Se houver usuários, retorna o primeiro; caso contrário, null
      catchError(() => {
        console.error('Erro ao realizar o login.');
        return of(null); // Em caso de erro, retorna null
      })
    );
  }
}
