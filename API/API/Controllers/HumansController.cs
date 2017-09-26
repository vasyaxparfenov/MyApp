using API.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.ServiceModel;
using API.APIBackendService;
using HumanModel = API.Models.HumanModel;

namespace API.Controllers
{
    public class HumansController : ApiController
    {
        private readonly APIBackend _apiBackend;
        private readonly IStringGenerator _stringGeneratorService;
        private readonly IModelFactory _modelFactory;

        public HumansController(APIBackend apiBackend, IStringGenerator stringGeneratorService, IModelFactory modelFactory)
        {
            _apiBackend = apiBackend;
            _stringGeneratorService = stringGeneratorService;
            _modelFactory = modelFactory;
        }
        
        // GET api/humans
        public IHttpActionResult Get() => Ok(_apiBackend.GetHumans().Values.Select(human => _modelFactory.Create(human)));
        

        // GET api/humans/{id}
        public IHttpActionResult Get(string id) => Ok(_modelFactory.Create(_apiBackend.GetHumanById(id)));
        

        
        [AcceptVerbs("OPTIONS")]
        public HttpResponseMessage Options()
        {
            var resp = new HttpResponseMessage(HttpStatusCode.OK);
           
            return resp;
        }

        // POST api/humans
        public void Post([FromBody]HumanModel humanToSave)
        {
            var human = new Human
            {
                name = humanToSave.Name,
                age = humanToSave.Age
            };
            
            while (true) {
                try
                {
                    human.id = _stringGeneratorService.GenerateString(10);
                    _apiBackend.CreateHuman(human);
                    break;
                }
                catch (FaultException<DomainFault> exception)
                {
                    if(exception.Detail.Code != DomainError.IdAlreadyExists)
                    {
                        throw;
                    }
                }
            }
        }

        // PUT api/humans/{id}
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
