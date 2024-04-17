import { IPessoa } from "../Interfaces/IPessoa";

export class Pessoa implements IPessoa {
  codigo: number;
  nome: string;
  dataNascimento: Date;
  inativo: boolean;
  nacionalidade: number;
  rg: string;
  passaporte: string;

  constructor(codigo: number, nome: string, dataNascimento: Date, inativo: boolean, nacionalidade: number, rg: string, passaporte: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.inativo = inativo;
    this.nacionalidade = nacionalidade;
    this.rg = rg;
    this.passaporte = passaporte;
  }
}
