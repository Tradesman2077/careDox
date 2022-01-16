import { Component, OnInit } from '@angular/core';
import { Patient } from '../_models/Patient';
import { Staff } from '../_models/Staff';
import { PatientService } from '../_services/patient.service';
import { StaffService } from '../_services/staff.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Patient[];
  user: Staff;
  constructor(private patientsService: PatientService, private staffService : StaffService) { }

  ngOnInit(): void {
    this.getPatientsInPatientList();
    this.getPatients();
  }

  getPatients(){
    this.patientsService.getPatients().subscribe(patients =>{
      this.patients = patients;
    })
  }
  getPatientsInPatientList(){
    let user = JSON.parse(localStorage.getItem("user"));

    this.staffService.getOneStaffUser(user["username"]).subscribe(user =>{
      this.user = user

    })


    this.patientsService.getPatients().subscribe(patients =>{
      this.patients = patients;
    })
  }

}
