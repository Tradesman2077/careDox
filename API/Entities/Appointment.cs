using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Appointment
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int CarerId { get; set; }
        public string Details { get; set; }
        public DateTime Date { get; set; }
    }
}