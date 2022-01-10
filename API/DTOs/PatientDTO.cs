using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class PatientDTO
    {
        public string Name { get; set; }
        public CarePlan CarePlan { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
    }
}