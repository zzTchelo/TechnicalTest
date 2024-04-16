using BackendMoura.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace BackendMoura.Repositories
{
    public class RepositorioPessoa
    {
        private readonly SqlConnection _connection;
        private readonly SqlCommand _command;
       public RepositorioPessoa(string stringConnection)
        {
            _connection = new SqlConnection(stringConnection);
            _command = new SqlCommand();
            _command.Connection = _connection;
        }

        public async Task<List<Pessoa>> getPessoas()
        {
            List<Pessoa> pessoas = new List<Pessoa>();
            using (_connection)
            {
                await _connection.OpenAsync();
                using (_command)
                {
                    _command.CommandText = "SELECT * FROM Pessoa;";
                    using (SqlDataReader dataReader = await _command.ExecuteReaderAsync())
                    {
                        while (await dataReader.ReadAsync())
                        {
                            Pessoa pessoa = new Pessoa
                            {
                                Codigo = Convert.ToInt32(dataReader["Codigo"]),
                                Nome = dataReader["Nome"].ToString(),
                                DataNascimento = Convert.ToDateTime(dataReader["DataNascimento"]),
                                Inativo = Convert.ToBoolean(dataReader["Inativo"]),
                                Nacionalidade = (NacionalidadeEnum)Convert.ToInt32(dataReader["Nacionalidade"]),
                                RG = dataReader["RG"].ToString(),
                                Passaporte = dataReader["Passaporte"].ToString()
                            };
                            pessoas.Add(pessoa);
                        }
                    }
                }
            }
            return pessoas;
        }

        public async Task<Pessoa> getPessoaById(int id)
        {
            Pessoa pessoa = new Pessoa();
            using (_connection)
            {
                await _connection.OpenAsync();
                using (_command)
                {
                    _command.CommandText = $"SELECT * FROM Pessoa WHERE Codigo = {id};";
                    using(SqlDataReader dataReader = await _command.ExecuteReaderAsync())
                    {
                        while (await dataReader.ReadAsync())
                        {
                            pessoa.Codigo = Convert.ToInt32(dataReader["Codigo"]);
                            pessoa.Nome = dataReader["Nome"].ToString();
                            pessoa.DataNascimento = Convert.ToDateTime(dataReader["DataNascimento"]);
                            pessoa.Inativo = Convert.ToBoolean(dataReader["Inativo"]);
                            pessoa.Nacionalidade = (NacionalidadeEnum)Convert.ToInt32(dataReader["Nacionalidade"]);
                            pessoa.RG = dataReader["RG"].ToString();
                            pessoa.Passaporte = dataReader["Passaporte"].ToString();
                        }
                        
                    }
                }
            }
            return pessoa;
        }

        public async Task<bool> postPessoa(Pessoa pessoa)
        {
            using (_connection)
            {
                await _connection.OpenAsync();
                using (_command)
                {
                    _command.CommandText = "INSERT INTO Pessoa (Nome, DataNascimento, Inativo, Nacionalidade, RG, Passaporte) " +
                        "VALUES (@Nome, @DataNascimento, @Inativo, @Nacionalidade, @RG, @Passaporte);";

                    _command.Parameters.Add(new SqlParameter("@Nome", SqlDbType.VarChar)).Value = pessoa.Nome;
                    _command.Parameters.Add(new SqlParameter("@DataNascimento", SqlDbType.Date)).Value = pessoa.DataNascimento;
                    _command.Parameters.Add(new SqlParameter("@Inativo", SqlDbType.Bit)).Value = pessoa.Inativo;
                    _command.Parameters.Add(new SqlParameter("@Nacionalidade", SqlDbType.SmallInt)).Value = pessoa.Nacionalidade;
                    _command.Parameters.Add(new SqlParameter("@RG", SqlDbType.VarChar)).Value = pessoa.RG;
                    _command.Parameters.Add(new SqlParameter("@Passaporte", SqlDbType.VarChar)).Value = pessoa.Passaporte;
                    int rowsAffected = await _command.ExecuteNonQueryAsync();
                    return rowsAffected > 0;
                }
            }
        }

        public async Task<bool> putPessoa(Pessoa pessoa)
        {
            return false;
        }


        public async Task<bool> deletePessoa(int id)
        {
            return false;
        }

    }
}