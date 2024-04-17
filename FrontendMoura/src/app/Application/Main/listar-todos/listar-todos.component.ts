import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../Classes/Pessoa';
import { PessoaService } from '../../Services/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-listar-todos',
  standalone: true,
  imports: [ HttpClientModule ],
  providers: [ PessoaService ],
  templateUrl: './listar-todos.component.html',
  styleUrl: './listar-todos.component.css'
})
export class ListarTodosComponent implements OnInit{

  private pessoas : Pessoa | null = null;

    constructor(
      private service : PessoaService
    ){}

    ngOnInit(): void {
      this.getPessoas();
    }

    getPessoas(): void {
      this.service.getPessoas()
        .pipe(take(1))
        .subscribe(pessoas => {
          this.pessoas = pessoas;
          console.log(this.pessoas); // Exibir no console a lista de pessoas
        });
    }


}
