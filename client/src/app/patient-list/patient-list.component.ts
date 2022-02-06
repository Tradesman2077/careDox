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
  singlePatient: Patient;
  patients: Patient[] =[];
  patNumList: string[] = [];
  user: Staff;
  constructor(private patientsService: PatientService, private staffService : StaffService) { }

  ngOnInit(): void {
    this.getPatientsInPatientList();
  }

  getPatients(){
    this.patientsService.getPatients().subscribe(patients =>{
      this.patients = patients;
    })
  }

  getPatientsInPatientList(){
    //get this staff members patients

    let user = JSON.parse(localStorage.getItem("user"));

    this.staffService.getOneStaffUser(user["username"]).subscribe(user =>{
      this.user = user;
      for(let i = 0; i < user.patientList.length; i++){

        if(user.patientList[i] !== ","){
          this.patNumList.push(user.patientList[i]);
        }
      }

      for(let i = 0; i < this.patNumList.length; i++){
        this.patientsService.getPatientById(parseInt(this.patNumList[i])).subscribe(patient =>{
          this.singlePatient = patient;
          this.patients.push(this.singlePatient);
        });
      }
    });
  }
}
