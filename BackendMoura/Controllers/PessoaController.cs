using System;
using System.Web.Http;
using BackendMoura.Repositories;
using System.Threading.Tasks;
using BackendMoura.Models;

namespace BackendMoura.Controllers
{
    public class PessoaController : ApiController
    {
        RepositorioPessoa _repositorioPessoa;
        public PessoaController() {
            // _repositorioPessoa = new RepositorioPessoa(Configurations.Databases.getStringConnection());
            _repositorioPessoa = new RepositorioPessoa("Server=.\\SQLEXPRESS;Database=tecnicoMoura;Trusted_Connection=True;");
        }
        // GET: api/Pessoa
        public async Task<IHttpActionResult> Get()
        {
            try
            {
                return Ok(await _repositorioPessoa.getPessoas());
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // GET: api/Pessoa/5
        public async Task<IHttpActionResult> Get(int id)
        {
            try
            {
                Pessoa pessoa = await _repositorioPessoa.getPessoaById(id);
                if(pessoa.Codigo == 0)
                    return NotFound();

                return Ok(pessoa);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // POST: api/Pessoa
        public async Task<IHttpActionResult> Post([FromBody]Pessoa pessoa)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                if (await _repositorioPessoa.postPessoa(pessoa))
                    return Ok();

                return BadRequest();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // PUT: api/Pessoa/5
        public async Task<IHttpActionResult> Put(int id, [FromBody]Pessoa pessoa)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                if (pessoa.Codigo != id)
                    return BadRequest("Objeto não relacionado, Ids diferentes");

                if (await _repositorioPessoa.putPessoa(pessoa))
                    return Ok();

                return NotFound();
            }
            catch (Exception ex) 
            {
                return InternalServerError(ex);
            }
        }

        // DELETE: api/Pessoa/5
        public async Task<IHttpActionResult> Delete(int id)
        {
            try
            {
                if (await _repositorioPessoa.deletePessoa(id))
                    return Ok();

                return NotFound();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
