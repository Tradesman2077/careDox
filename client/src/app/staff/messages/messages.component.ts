import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/Message';
import { Staff } from 'src/app/_models/Staff';
import { MessageService } from 'src/app/_services/message.service';
import { StaffService } from 'src/app/_services/staff.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:Message[] =[];
  user:Staff;
  hasUnread:boolean = false;

  constructor(private messageService : MessageService, private staffService : StaffService) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      var user = JSON.parse(localStorage.getItem("user"));
      this.staffService.getOneStaffUserMapped(user.username).subscribe(user =>{
        this.user = user;
        this.messageService.getMessagesByUserId(user.id).subscribe(messages =>{
          this.messages = messages;
          for(let i =0; i < this.messages.length; i++){
            console.log(this.messages[i]);
            if(this.messages[i].dateRead.toString() == '0001-01-01T00:00:00'){
              this.hasUnread = true;
              console.log(this.hasUnread);
            }
            else{
              this.hasUnread = false;
              console.log("here false");
            }
          }
        })
      })
    }
  }
  markAsRead(id:any){
    this.messageService.updateMessage(id).subscribe(response =>{
      console.log(response);
    });
  }
}
