using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public int SenderId { get; set; }
        public string SenderUsername { get; set; }
        public int RecipientId { get; set; }
        public string  RecipientUserName { get; set; }
        public string Content { get; set; }
        public DateTime DateRead { get; set; }
        public DateTime DateSent { get; set; }     
    }
}