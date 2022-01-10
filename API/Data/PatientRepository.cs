using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public class PatientRepository
    {
        private readonly DataContext _context;
        public PatientRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Patient> GetUserByIdAsync(int id)
        {
            return await _context.Patients.FindAsync(id);
        }
        
    }
}