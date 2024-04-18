import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PessoaService } from '../../Services/pessoa.service';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-cadastrar-pessoa',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, NgClass, NgIf, HttpClientModule, NgxMaskDirective, NgxMaskPipe ],
  providers: [ PessoaService ],
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrl: './cadastrar-pessoa.component.css'
})

export class CadastrarPessoaComponent {
  private pessoa : any;
  form! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service : PessoaService,
    private router : Router
  ) {}


  ngOnInit(): void {
    this.iniciaForm();
  }

  iniciaForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      inativo: ['1', Validators.required],
      nacionalidade: ['1', Validators.required],
      rg: [''],
      passaporte: ['']
    });
  }

  CadastrarPessoa() {
    if (this.form.valid) {
      this.pessoa = this.form.value
      this.pessoa.inativo = parseInt(this.pessoa.inativo) == 0 ? true : false
      //console.log(this.form.value);
      this.service.postPessoa(this.pessoa).subscribe(() => {
        this.router.navigate(['ListarTodos']);
        //console.log('Pessoa cadastrada com sucesso!');
       }
     );
    }
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

