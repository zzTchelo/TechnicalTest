import { IPessoa } from './../Interfaces/IPessoa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private readonly url_API = 'https://localhost:44385/api/Pessoa';

  constructor(
    private http : HttpClient
  ) { }

  public getPessoas() : Observable<IPessoa>{
    return this.http.get<IPessoa>(this.url_API);
  }

  public getPessoabyId(id : number): Observable<IPessoa>{
    //console.log(`${this.url_API}/${id}`)
    return this.http.get<IPessoa>(`${this.url_API}/${id}`);
  }

  public postPessoa(_pessoa : IPessoa) : Observable<IPessoa>{
    return this.http.post<IPessoa>(this.url_API, _pessoa);
  }

  public putPessoa(_pessoa : IPessoa) : Observable<IPessoa>{
    //console.log(_pessoa);
    //console.log(`${this.url_API}/${_pessoa.codigo}`);
    return this.http.put<IPessoa>(`${this.url_API}/${_pessoa.codigo}`, _pessoa);
  }

  public deletePessoa(id : number){
    return this.http.delete<IPessoa>(`${this.url_API}/${id}`);
  }

}
