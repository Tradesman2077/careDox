using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //[Authorize]
    public class MessagesController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMessageRepository _messageRepository;
        public MessagesController(IUserRepository userRepository, IMessageRepository messageRepository)
        {
            _userRepository = userRepository;
            _messageRepository = messageRepository;
        }

        [HttpPost("createMessage")]
        public async Task<ActionResult<Message>>CreateMessage(Message message)
        {
            if(message.RecipientId == message.SenderId ){
                return BadRequest("you cant send messages to yourself");
            }
            _messageRepository.AddMessage(message);
            if(await _messageRepository.SaveAllAsync()) return Ok();
            return BadRequest("Message sending failed");
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Message>>>GetMessagesById(int id)
        {
            var messages = await _messageRepository.GetMessagesForUserAsync(id);
            return Ok(messages);

        }

    }
}