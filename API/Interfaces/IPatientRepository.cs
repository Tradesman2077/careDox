using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IPatientRepository
    {
        void Update(Patient patient);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<Patient>> GetUsersAsync();
        Task<Patient> GetUserByIdAsync(int id);
        Task<Patient> GetUserByUsernameAsync(string username);
        Task<string> RegisterPatient(Patient patient);
        void DeletePatient(Patient patient);
    }
}