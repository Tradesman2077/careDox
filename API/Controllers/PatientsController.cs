using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;
using AutoMapper;

namespace API.Controllers
{
    [Authorize]
    public class PatientsController : BaseApiController
    {
        private readonly IPatientRepository _patientRepository;

        private readonly DataContext _context;
        public PatientsController(DataContext context, IPatientRepository patientRepository)
        {
            _context = context;
            _patientRepository = patientRepository;
        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {
            return await _context.Patients.ToListAsync();
        }


        

        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatientByUserName(int id)
        {
            return await _patientRepository.GetUserByIdAsync(id);

        }



    }
}