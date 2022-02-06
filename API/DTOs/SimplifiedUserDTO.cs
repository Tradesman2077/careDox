using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class SimplifiedUserDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PhotoUrl { get; set; }
        public string PatientList { get; set; }
        public int Age { get; set; }
        public string FullName { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public bool IsAdmin {get; set; }
        public string Address { get; set; }
        public string ContactNumber{get; set;}
        public ICollection<PhotoDTO> Photos { get; set; }
        public ICollection<Patient> Patients {get; set;}
    }
}