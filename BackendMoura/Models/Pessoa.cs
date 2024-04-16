using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackendMoura.Models
{
    public class Pessoa
    {
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public bool Inativo { get; set; }
        public NacionalidadeEnum Nacionalidade { get; set; }
        public string RG { get; set; }
        public string Passaporte { get; set; }
    }

    public enum NacionalidadeEnum
    {
        BR = 1,
        Outros = 2
    }

}
