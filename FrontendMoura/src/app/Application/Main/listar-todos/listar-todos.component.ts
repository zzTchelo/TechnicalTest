import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../Services/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs';
import { NgFor } from '@angular/common';
import { IPessoa } from '../../Interfaces/IPessoa';

@Component({
  selector: 'app-listar-todos',
  standalone: true,
  imports: [ HttpClientModule, NgFor ],
  providers: [ PessoaService ],
  templateUrl: './listar-todos.component.html',
  styleUrl: './listar-todos.component.css'
})
export class ListarTodosComponent implements OnInit{

  public pessoas: any = {};

    constructor(
      private service : PessoaService
    ){}

    ngOnInit(): void {
      this.getPessoas();
    }

    getPessoas() {
      this.service.getPessoas()
        .pipe(take(1))
        .subscribe(pessoa => {
          this.pessoas = pessoa;
          console.log(pessoa); // Aqui você terá acesso à lista completa de pessoas
        });
    }
}
