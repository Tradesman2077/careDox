using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(StaffUser user);
        Task<bool> SaveAllAsync();
        Task<IEnumerable<StaffUser>> GetUsersAsync();
        Task<StaffUser> GetUserByIdAsync(int id);
        Task<StaffUser> GetUserByUsernameAsync(string username);
        Task<IEnumerable<SimplifiedUserDTO>> GetSimplifiedUserDTOsAsync();
        Task<SimplifiedUserDTO> GetSimplifiedUserAsync(string username);
    }
}