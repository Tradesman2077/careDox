using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

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
            var plan = await _context.CarePlans.FirstOrDefaultAsync(x => x.Id == id);

            return plan;
        }

        public void Update(CarePlan carePlan)
        {
            _context.Entry(carePlan).State = EntityState.Modified;
        }
        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        public async Task<CarePlan> AddPlan(CarePlan plan){
            _context.Add(plan);
            if(await _context.SaveChangesAsync() > 0){
                return await _context.CarePlans.FirstOrDefaultAsync(x => x.PatientId == plan.PatientId);
            }
            else{
                return null;
            }
        }
    }
}