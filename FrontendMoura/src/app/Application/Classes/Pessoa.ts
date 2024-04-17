import { IPessoa } from "../Interfaces/IPessoa";

export class Pessoa implements IPessoa {
  Codigo: number;
  Nome: string;
  DataNascimento: Date;
  Inativo: boolean;
  Nacionalidade: number;
  RG: string;
  Passaporte: string;

  constructor(
    Codigo: number,
    Nome: string,
    DataNascimento: Date,
    Inativo: boolean,
    Nacionalidade: number,
    RG: string,
    Passaporte: string
  ) {
    this.Codigo = Codigo;
    this.Nome = Nome;
    this.DataNascimento = DataNascimento;
    this.Inativo = Inativo;
    this.Nacionalidade = Nacionalidade;
    this.RG = RG;
    this.Passaporte = Passaporte;
  }
}
