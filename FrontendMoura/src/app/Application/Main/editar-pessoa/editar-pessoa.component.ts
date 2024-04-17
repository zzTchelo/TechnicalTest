import { NgClass, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PessoaService } from '../../Services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, NgClass, NgIf, HttpClientModule ],
  providers: [ PessoaService ],
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css'
})

export class EditarPessoaComponent {

  private pessoa : any;
  private pessoaAtt : any;
  form !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service : PessoaService,
    private router : Router,
    private route : ActivatedRoute
  ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.iniciaForm(parseInt(id!));
  }

  iniciaForm(id : number): void {
    this.service.getPessoabyId(id).subscribe(pessoa => {
      this.pessoa = pessoa;
      console.log(this.pessoa);
      let dataFormatada = this.formatarData(this.pessoa.DataNascimento);

      this.form = this.formBuilder.group({
        codigo: [this.pessoa.Codigo, Validators.required],
        nome: [this.pessoa.Nome, Validators.required],
        dataNascimento: [dataFormatada, Validators.required],
        inativo: [this.pessoa.Inativo ? 1 : 0, Validators.required], //Problem HERE
        nacionalidade: [this.pessoa.Nacionalidade, Validators.required],
        rg: [this.pessoa.RG],
        passaporte: [this.pessoa.Passaporte]
      });
    });
  }

  formatarData(data: string): string {
    const dataObj = new Date(data);
    const ano = dataObj.getFullYear();
    const mes = ('0' + (dataObj.getMonth() + 1)).slice(-2);
    const dia = ('0' + dataObj.getDate()).slice(-2);
    return `${ano}-${mes}-${dia}`;
  }

  AlterarPessoa() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.pessoaAtt = this.form.value
      this.pessoaAtt.inativo = parseInt(this.pessoaAtt.inativo) == 0 ? true : false
      this.service.putPessoa(this.form.value).subscribe(() => {
        this.router.navigate(['ListarTodos']);
        console.log('Pessoa alterada com sucesso!');
       }
     );
    }
  }

  excluirPessoa(){

  }

  enableButton(): string {
    if(this.form.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

  resetForm(): void {
    this.form.reset();
  }

}
