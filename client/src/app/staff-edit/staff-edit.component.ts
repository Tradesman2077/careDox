import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Staff } from '../_models/Staff';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { StaffService } from '../_services/staff.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user : User;
  staff: Staff;
  staffList: Staff[] = []; 


  

  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if(this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(private accountService : AccountService, private staffService : StaffService, private toaster : ToastrService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    
   }
  ngOnInit(): void {
    this.loadAllStaff();
    this.loadStaff();
  }

  loadStaff(){
    this.staffService.getOneStaffUser(this.user.username).subscribe(staff => this.staff = staff);
  }
  
  updateStaff(){ 
    this.staffService.updateStaff(this.staff, this.user.username).subscribe(() =>{
      this.toaster.success("Profile updated successfully");
      this.editForm.reset(this.staff);
    });
    
  }
  loadAllStaff(){
    this.staffService.getStaff().subscribe(staff => {
      this.staffList = staff;
    });
  }
  updateStaffToEdit(staff:Staff){
    this.staff = staff;
  }
  



}
