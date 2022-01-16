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
        
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public int CarePlanId { get; set; }

    }
}