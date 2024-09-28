import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Aluno } from '../models/Aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  api = `${environment.api}/aluno/`;

  constructor(private clienteHttp: HttpClient) { }

  inserir(novoAluno: Aluno): Observable<Aluno>{
    return this.clienteHttp.post<Aluno>(this.api, novoAluno)
  }

  listar(): Observable<Aluno[]>{
    return this.clienteHttp.get<Aluno[]>(this.api);
  }

  deletar(idAluno: number): Observable<object>{
    return this.clienteHttp.delete(`${this.api}${idAluno}`);
  }

  pesquisarPorId(id: number): Observable<Aluno> {
    return this.clienteHttp.get<Aluno>(`${this.api}${id}`);
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.clienteHttp.put<Aluno>(`${this.api}${aluno.id}`, aluno);
  }


}
