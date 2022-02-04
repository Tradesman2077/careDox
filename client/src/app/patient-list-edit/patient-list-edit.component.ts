import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../_models/Patient';
import { Staff } from '../_models/Staff';
import { PatientService } from '../_services/patient.service';
import { StaffService } from '../_services/staff.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-list-edit',
  templateUrl: './patient-list-edit.component.html',
  styleUrls: ['./patient-list-edit.component.css']
})
export class PatientListEditComponent implements OnInit {
  singlePatient: Patient;
  patients: Patient[] =[];
  staff: Staff;
  patNumList: string[] =[];


  constructor(private staffService : StaffService, private route: ActivatedRoute,
     private patientsService: PatientService,
     private toaster: ToastrService) { }

  ngOnInit(): void {
    this.loadStaffMember();
  }

  loadStaffMember(){
    this.staffService.getOneStaffUser(this.route.snapshot.paramMap.get('username')).subscribe(staff =>{
      this.staff = staff;
      console.log(this.staff);
      this.getPatientsInPatientList();
    })
  }

  getPatientsInPatientList(){
    //get this staff members patients
    for(let i = 0; i < this.staff.patientList.length; i++){
      if(this.staff.patientList[i] !== ","){
        this.patNumList.push(this.staff.patientList[i]);

      }
    }
    for(let i = 0; i < this.patNumList.length; i++){
        this.patientsService.getPatientById(parseInt(this.patNumList[i])).subscribe(patient =>{
          this.singlePatient = patient;
          this.patients.push(this.singlePatient);
      });
    }
  }
  updateStaff(){ 
    this.staffService.updateStaff(this.staff, this.route.snapshot.paramMap.get('username')).subscribe(() =>{
      
      this.toaster.success("Profile updated successfully");

    });
    
  }




}



