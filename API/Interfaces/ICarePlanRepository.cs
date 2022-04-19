using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface ICarePlanRepository
    {

        void Update(CarePlan carePlan);
        Task<bool> SaveAllAsync();
        Task<CarePlan> GetPlanByIdAsync(int id);
        Task<CarePlan> AddPlan(CarePlan plan);
    }
}