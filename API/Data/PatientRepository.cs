using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using AutoMapper;

namespace API.Data
{
    public class PatientRepository : IPatientRepository
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

        public Task<Patient> GetUserByUsernameAsync(string username)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Patient>> GetUsersAsync()
        {
            throw new NotImplementedException();
        }

        public Task<bool> SaveAllAsync()
        {
            throw new NotImplementedException();
        }

        public void Update(Patient user)
        {
            throw new NotImplementedException();
        }
    }
}