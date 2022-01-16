using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public IMapper _mapper;
        public UserRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<SimplifiedUserDTO> GetSimplifiedUserAsync(string username)
        {
            return await _context.Users.Where(x => x.UserName == username)
            .ProjectTo<SimplifiedUserDTO>(_mapper.ConfigurationProvider)
                    .SingleOrDefaultAsync();
                
        }

      
        public async Task<IEnumerable<SimplifiedUserDTO>> GetSimplifiedUserDTOsAsync()
        {
            return await _context.Users.ProjectTo<SimplifiedUserDTO>(_mapper.ConfigurationProvider).ToListAsync();
        }

        public async Task<StaffUser> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<StaffUser> GetUserByUsernameAsync(string username)
        {
            return await _context.Users.SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<IEnumerable<StaffUser>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(StaffUser user)
        {
            _context.Entry(user).State = EntityState.Modified;
        }
    }
}