import { Component, OnInit } from '@angular/core';
import { Patient } from '../_models/Patient';
import { Staff } from '../_models/Staff';
import { MessageService } from '../_services/message.service';
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
  user: Staff;
  hasUnread:boolean;
  constructor(private patientsService: PatientService, private staffService : StaffService, private messageService : MessageService) { }

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
      let patArr = this.user.patientList.split(",");
      patArr.pop();
      for(let i = 0; i < patArr.length; i++){
        this.patientsService.getPatientById(parseInt(patArr[i])).subscribe(patient =>{
          this.singlePatient = patient;
          if(this.singlePatient != null){
            this.patients.push(this.singlePatient);
          }
        });
      }
      this.messageService.checkForUnreadMessages(this.user.id).subscribe(hasUnread =>{
        this.hasUnread = hasUnread;
      });
    });
  }
}
