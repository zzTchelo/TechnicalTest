using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BackendMoura.Controllers
{
    public class PessoaController : ApiController
    {
        // GET: api/Pessoa
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Pessoa/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pessoa
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Pessoa/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Pessoa/5
        public void Delete(int id)
        {
        }
    }
}
