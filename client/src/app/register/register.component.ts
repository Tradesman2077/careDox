import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Staff } from '../_models/Staff';
import { AccountService } from '../_services/account.service';
import { StaffService } from '../_services/staff.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  

  constructor(private accountService : AccountService, private toastr: ToastrService,
     private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.model.username = this.model.username.toLowerCase();
    this.model.username = this.model.username.replace(/ /g, '');
    this.accountService.register(this.model).subscribe(response =>{
      this.cancel();
      this.router.navigateByUrl('admin/register/registerDetails/'+this.model.username);
    }, error =>{
      this.toastr.error(error);
    })
  }
  
  cancel(){
    this.cancelRegister.emit(false);
  }



}
