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
    [Authorize]
    public class MessagesController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMessageRepository _messageRepository;
        public MessagesController(IUserRepository userRepository, IMessageRepository messageRepository)
        {
            _userRepository = userRepository;
            _messageRepository = messageRepository;
        }

        [HttpPost]
        public async Task<ActionResult<Message>>CreateMessage(Message message)
        {
            if(message.RecipientId == message.SenderId ){
                return BadRequest("you cant send messages to yourself");
            }
            var sender = await _userRepository.GetUserByIdAsync(message.SenderId);
            var recipient = await _userRepository.GetUserByIdAsync(message.RecipientId);
            if(recipient == null || sender == null){
                return NotFound();
            }
            _messageRepository.AddMessage(message, message.SenderId);
            if(await _messageRepository.SaveAllAsync()) return Ok();
            return BadRequest("Message sending failed");
        }

    }
}