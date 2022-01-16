using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;

namespace API.Data
{
    public class CarePlanRepository : ICarePlanRepository
    {
        private readonly DataContext _context;
        public CarePlanRepository(DataContext context){
            _context = context;
        }
        public async Task<CarePlan> GetPlanByIdAsync(int id)
        {
            return await _context.CarePlans.FindAsync(id);
        }

        
    }
}