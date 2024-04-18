import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../Services/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-todos',
  standalone: true,
  imports: [ HttpClientModule, NgFor, RouterLink, FormsModule, CommonModule ],
  providers: [ PessoaService ],
  templateUrl: './listar-todos.component.html',
  styleUrl: './listar-todos.component.css'
})

export class ListarTodosComponent implements OnInit{

  public listaFiltrada : any = {};
  public pessoas : any = {};
  public filter : string = '';

    constructor(
      private service : PessoaService
    ){}

    ngOnInit(): void {
      this.getPessoas();
    }

    procurarPessoas() {
      this.pessoas = this.listaFiltrada.filter((pessoa: any) => {
        return pessoa.Nome.toLowerCase().includes(this.filter.toLowerCase()); // Verifique se a propriedade de nome está correta (pode ser 'nome', 'Nome' ou outro nome)
      });
    }

    getPessoas() {
      this.service.getPessoas()
        .pipe(take(1))
        .subscribe(pessoa => {
          this.pessoas = pessoa;
          this.listaFiltrada = pessoa;
          console.log(pessoa);
        });
    }
}
