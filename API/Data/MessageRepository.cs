using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    
    public class MessageRepository : IMessageRepository
    {
        public IMapper _mapper;
        private readonly DataContext _context;
        public MessageRepository(DataContext context, IMapper mapper){
            _context = context;
            _mapper = mapper;
        }
        public void AddMessage(Message message)
        {
            _context.Messages.Add(message);
        }

        public void DeleteMessage(Message message)
        {
            _context.Messages.Remove(message);
        }

        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages.FindAsync(id);
        }

        public async Task<IEnumerable<Message>> GetMessagesForUserAsync(int id)
        {
           return await _context.Messages.Where(x => x.RecipientId == id).ToListAsync();

        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
          public void Update(Message message)
        {
            _context.Entry(message).State = EntityState.Modified;
        }
    }
}