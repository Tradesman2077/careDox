import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from 'src/app/_services/staff.service';

@Component({
  selector: 'app-register-staffdetails',
  templateUrl: './register-staffdetails.component.html',
  styleUrls: ['./register-staffdetails.component.css']
})
export class RegisterStaffdetailsComponent implements OnInit {

  constructor( private staffService: StaffService, private toastr: ToastrService,private route: ActivatedRoute,) { }

  profile : any = {};

  ngOnInit(): void {
  }


  update(){
    this.profile.username = this.route.snapshot.paramMap.get('username');
    this.profile.patientList = "";
    console.log(
      this.profile.username
    )
    this.staffService.updateStaff(this.profile, this.profile.username).subscribe(() =>{
      
      this.toastr.success("Profile added successfully");
    });
  }

}
