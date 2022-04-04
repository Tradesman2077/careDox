using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IMessageRepository
    {
        void AddMessage(Message message);
        void DeleteMessage(Message message);

        Task<Message> GetMessage(int id);
        Task<IEnumerable<Message>> GetMessagesForUserAsync(int id);
        
        Task<bool> SaveAllAsync();

        void Update(Message message);


    }
}