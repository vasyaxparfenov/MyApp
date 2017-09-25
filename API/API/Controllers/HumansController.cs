using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using API.APIBackend;
using Human = API.Models.Human;

namespace API.Controllers
{
    public class HumansController : ApiController
    {
        private static readonly APIBackendClient ApiBackend = new APIBackendClient();
        private static IEnumerable<Human> GetHumans()
        {
            return new []{
                new Human
                {
                    Id = "1",
                    Name = "Vasya",
                    Age = 20
                },
                new Human
                {
                    Id = "2",
                    Name = "Alex",
                    Age = 36
                },
                new Human
                {
                    Id = "3",
                    Name = "Pavel",
                    Age = 20
                } 

            };
        }
        
        
        // GET api/values
        public IEnumerable<Human> Get()
        {
            return ApiBackend.GetHumans().Select(human => new Human {Age = human.Value.age, Id = human.Value.id, Name = human.Value.name});
        }

        // GET api/values/5
        public Human Get(string id)
        {
            var human = ApiBackend.GetHumanById(id);
            return new Human
            {
                Age = human.age,
                Id = human.id,
                Name = human.name
            };
        }

        // POST api/values
        [AcceptVerbs("OPTIONS")]
        public HttpResponseMessage Options()
        {
            var resp = new HttpResponseMessage(HttpStatusCode.OK);
           
            return resp;
        }

        public void Post([FromBody]Human humanToSave)
        {
            if(humanToSave != null)
            {
                var human = new APIBackend.Human
                {
                    id = humanToSave.Id,
                    name = humanToSave.Name,
                    age = humanToSave.Age
                };
                ApiBackend.CreateHuman(human);
            }
           
        }

        // PUT api/values/5m
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
