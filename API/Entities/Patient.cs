using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CarePlanId { get; set; }
        

    }
}