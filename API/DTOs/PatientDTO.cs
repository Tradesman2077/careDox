using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class PatientDTO
    {
        public string Name { get; set; }
        public int CarePlanId { get; set; }
    }
}