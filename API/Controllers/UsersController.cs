using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository , IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<SimplifiedUserDTO>>> GetUsers()
        {
            var users = await _userRepository.GetSimplifiedUserDTOsAsync();
            return Ok(users);
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<SimplifiedUserDTO>> GetUserByUserName(string username)
        {
            return await _userRepository.GetSimplifiedUserAsync(username);
        }
        

        [HttpPut("{username}")]
        public async Task<ActionResult> UpdateUser(StaffUpdateDTO staffUpdateDto){

            var user = await _userRepository.GetUserByUsernameAsync(staffUpdateDto.UserName);

            user.FullName = staffUpdateDto.FullName;
            user.Address = staffUpdateDto.Address;
            user.Gender = staffUpdateDto.Gender;
            user.ContactNumber = staffUpdateDto.ContactNumber;
            user.PatientList = staffUpdateDto.PatientList;
            
            _userRepository.Update(user);

            if(await _userRepository.SaveAllAsync()) return NoContent();

            return BadRequest("Failed to update user");

        }
        

    } 
}