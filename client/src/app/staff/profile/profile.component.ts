import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/_models/Staff';
import { StaffService } from 'src/app/_services/staff.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  staff: Staff;

  constructor(private staffService : StaffService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadStaffMember();
  }

  loadStaffMember(){
    this.staffService.getOneStaffUser(this.route.snapshot.paramMap.get('username')).subscribe(staff =>{
      this.staff = staff;

    })
  }

}
