using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using API.DTOs;
using Microsoft.EntityFrameworkCore;

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

        public async Task<string> RegisterPatient(Patient patient)
        {
            _context.Add(patient);
            
            if(await _context.SaveChangesAsync() > 0){
                return "";
            }
            else{
                return "Something went wrong";
            }
        }
        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        public void Update(Patient patient)
        {
            _context.Entry(patient).State = EntityState.Modified;
        }

        public void DeletePatient(Patient patient)
        {
            _context.Remove(patient);
            _context.SaveChanges();
        }
    }
}