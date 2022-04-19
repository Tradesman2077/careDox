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
using API.DTOs;

namespace API.Controllers
{
    [Authorize]
    public class CarePlansController : BaseApiController
    {
        private readonly ICarePlanRepository _carePlanRepository;
        private readonly DataContext _context;
        
        public CarePlansController(DataContext context, ICarePlanRepository carePlanRepository)
        {
            _context = context;
            _carePlanRepository = carePlanRepository;
        }

        [HttpGet("{id}")]
        
        public async Task<ActionResult<CarePlan>> GetPlan(int id)
        {
            return await _carePlanRepository.GetPlanByIdAsync(id);
        }

        [HttpPost("addCarePlan")]
        public async Task<ActionResult<CarePlan>> AddPlan(CarePlan plan){

            return await _carePlanRepository.AddPlan(plan);
            
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCarePlan(CarePlanDTO carePlanDTO){
         

            var carePlan = await _carePlanRepository.GetPlanByIdAsync(carePlanDTO.Id);

            carePlan.LevelOfUnderstanding = carePlanDTO.LevelOfUnderstanding;
            carePlan.Communication = carePlanDTO.Communication;
            carePlan.Mobility = carePlanDTO.Mobility;
            carePlan.PersonalCare = carePlanDTO.PersonalCare;
            carePlan.ContinenceCare = carePlanDTO.ContinenceCare;
            carePlan.OralCare = carePlanDTO.OralCare;
            carePlan.NutritionAndHydration = carePlanDTO.NutritionAndHydration;
            carePlan.SkinCare = carePlanDTO.SkinCare;
            carePlan.InterestsAndHobbies = carePlanDTO.InterestsAndHobbies;
            carePlan.MentalHealth = carePlanDTO.MentalHealth;
            carePlan.Medication = carePlanDTO.Medication;
            carePlan.EolPref = carePlanDTO.EolPref;
            carePlan.ReligiousAndCulturalBeliefs = carePlanDTO.ReligiousAndCulturalBeliefs;

            _carePlanRepository.Update(carePlan);
 

            if(await _carePlanRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update care plan");

        }


    }
}