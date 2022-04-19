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
using API.DTOs;
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

        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {   
            return await _context.Patients.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatientByUserName(int id)
        {
            return await _patientRepository.GetUserByIdAsync(id);

        }

        [HttpPost("registerPatient")]
        public async Task<ActionResult<string>> RegisterPatient(Patient patient){

            return await _patientRepository.RegisterPatient(patient);
            
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletePatient(int id){

                var patient = await _patientRepository.GetUserByIdAsync(id);
                _patientRepository.DeletePatient(patient);
                await _patientRepository.SaveAllAsync();
            
                return Ok();
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUser(PatientDTO patientDto){
            
            var patient = await _patientRepository.GetUserByIdAsync(patientDto.Id);
            patient.KnownAs = patientDto.KnownAs;
            patient.Name = patientDto.Name;
            patient.Address = patientDto.Address;
            patient.Gender = patientDto.Gender;
            patient.CarePlanId = patientDto.CarePlanId;          
            _patientRepository.Update(patient);

            if(await _patientRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update patient");

        }

    }
}