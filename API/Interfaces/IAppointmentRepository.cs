using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IAppointmentRepository
    {
        void Update(Appointment appointment);
        Task<bool> SaveAllAsync();
        Task<Appointment> GetAppointmentByIdAsync(int id);
        Task<string> RegisterAppointment(Appointment appointment);
        void DeleteAppointment(Appointment appointment);
    }
}