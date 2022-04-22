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
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly DataContext _context;
        public AppointmentRepository(DataContext context)
        {

            _context = context;
        }

        public async Task<Appointment> GetAppointmentByIdAsync(int id)
        {
            var app =  await _context.Appointments.OrderByDescending(x => x.Date).FirstOrDefaultAsync(x => x.PatientId == id);
            var date = DateTime.Now.ToString("yyyy-mm-dd").Remove(10);

            //reformat dateTime
            var todaysDate = "";
            todaysDate = date.Replace('-', '/');
            var storedDate = "";

            System.Console.WriteLine(todaysDate);
            System.Console.WriteLine(app.Date.ToString().Remove(10));

            if(app!=null){
                storedDate = app.Date.ToString().Remove(10);
                if(storedDate == todaysDate){
                    return app;
                }
                else{
                    return null;
                }
            }
            else{
                return null;
            }
        }

        public async Task<string> RegisterAppointment(Appointment appointment)
        {
            Console.WriteLine(appointment.Details);
            _context.Add(appointment);
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

        public void Update(Appointment appointment)
        {
            _context.Entry(appointment).State = EntityState.Modified;
        }

        public void DeleteAppointment(Appointment appointment)
        {
            _context.Remove(appointment);
            _context.SaveChanges();
        }
    }
}