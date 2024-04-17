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
    return this.http.get<IPessoa>(`${this.url_API}/${id}`);
  }

  public postPessoa(_pessoa : IPessoa){

  }

  public putPessoa(_pessoa : IPessoa){

  }

  public deletePessoa(id : number){

  }

}
