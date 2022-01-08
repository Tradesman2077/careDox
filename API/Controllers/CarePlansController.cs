using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CarePlansController : BaseApiController
    {
        private readonly DataContext _context;
        public CarePlansController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<CarePlan>> GetPlan(int id)
        {
            
            return await _context.CarePlans.FindAsync(id);
        }


    }
}