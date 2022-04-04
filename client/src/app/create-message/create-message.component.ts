import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../_models/Message';
import { Staff } from '../_models/Staff';
import { MessageService } from '../_services/message.service';
import { StaffService } from '../_services/staff.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  model:any = {};
  staff:Staff[];
  recipientName:string;
  recipientId:any;
  sender:any;

  constructor(private staffService : StaffService, private messageService : MessageService, private toaster : ToastrService,
    private router : Router) { }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(){
    this.staffService.getStaff().subscribe(staff =>{
      this.staff = staff;
    })
  }
  loadStaffDetails(id:any, name:any){
    this.recipientName = name;
    this.recipientId = id;
  }
  send(){
    this.model.recipientId = this.recipientId;
    this.model.recipientUserName = this.recipientName;
    this.model.dateSent = new Date().toISOString().slice(0, 10);
    if(localStorage.getItem("user")){
      var user = JSON.parse(localStorage.getItem("user"));
      this.staffService.getOneStaffUserMapped(user.username).subscribe(sender =>{
        this.sender = sender;
        this.model.senderId = this.sender.id;
        this.model.senderUsername = this.sender.fullName;
        this.messageService.createMessage(this.model).subscribe(response => {
          console.log(response);
        });
        this.toaster.show("Message sent");
        this.router.navigateByUrl("/messages");
      })
    }
    
  }

}
