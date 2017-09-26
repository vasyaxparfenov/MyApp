using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using API.APIBackendService;

namespace API.Services
{
    public class ModelFactoryService : IModelFactory
    {
        public HumanModel Create(Human human)
        {
            return new HumanModel
            {
                Id = human.id,
                Name = human.name,
                Age = human.age
            };
        }
    }
}