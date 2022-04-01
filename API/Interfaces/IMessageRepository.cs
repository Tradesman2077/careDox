using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message, int id);
        void DeleteMessage(Message message);

        Task<Message> GetMessage(int id);
        Task<IEnumerable<Message>> GetMessagesForUser(int id);
        
        Task<bool> SaveAllAsync();


    }
}