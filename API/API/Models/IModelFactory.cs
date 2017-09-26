using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API.APIBackendService;

namespace API.Models
{
    public interface IModelFactory
    {
        HumanModel Create(Human human);
   
    }
}
