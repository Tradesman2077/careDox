using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;

namespace API.Data
{
    public class MessageRepository : IMessageRepository
    {
        public void AddMessage(Message message)
        {
            throw new NotImplementedException();
        }

        public void DeleteMessage(Message message)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Message>> GetMessagesForUser(int id)
        {
            throw new NotImplementedException();
        }
    }
}