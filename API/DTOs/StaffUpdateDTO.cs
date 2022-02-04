using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class StaffUpdateDTO
    {
        public string Address { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public bool IsAdmin { get; set; }
        
    }
}