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
    //[Authorize]
    public class AppointmentController : BaseApiController
    {
        private readonly IAppointmentRepository _appointmentRepository;

        private readonly DataContext _context;
        public AppointmentController(DataContext context, IAppointmentRepository appointmentRepository)
        {
            _context = context;
            _appointmentRepository = appointmentRepository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments.OrderByDescending(x => x.Id).Take(10).ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointmentById(int id)
        {
            return await _appointmentRepository.GetAppointmentByIdAsync(id);
        }
        [HttpPost("registerAppointment")]
        public async Task<ActionResult<string>> RegisterAppointment(Appointment appointment){
            return await _appointmentRepository.RegisterAppointment(appointment);
        }
    }
}