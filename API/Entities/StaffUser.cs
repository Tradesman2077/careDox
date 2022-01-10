using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Extensions;

namespace API.Entities
{
    public class StaffUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash {get; set;}
        public byte[] PasswordSalt { get; set; }
        public string PatientList { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string FullName { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string Gender { get; set; }
        public bool IsAdmin {get; set; }
        public string Address { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<Patient> Patients {get; set;}

        // public int GetAge(){
        //     return DateOfBirth.CalculateAge();
        // }

    }
}