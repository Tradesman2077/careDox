import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarePlan } from '../_models/CarePlan';
import { Patient } from '../_models/Patient';
import { CareplanService } from '../_services/careplan.service';
import { PatientService } from '../_services/patient.service';
import { Appointment } from '../_models/Appointment';
import { StaffService } from '../_services/staff.service';
import { Staff } from '../_models/Staff';
import { AppointmentService } from '../_services/appointment.service';
import { ToastRef } from 'ngx-toastr';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient : Patient;
  plan: CarePlan;
  appDetails:string;
  user:Staff;
  app:Appointment;
  today:string;
  complete:boolean = false;

  apps:Appointment[] = [];

  constructor(private patientservice : PatientService, private route: ActivatedRoute,
     private careplanService : CareplanService, private staffService: StaffService,
      private appointmentService: AppointmentService, private router: Router ) { }

  ngOnInit(): void {
    this.today = new Date().toISOString().slice(0, 10);
    this.app = new Appointment();
    this.loadPatient();
    let user = JSON.parse(localStorage.getItem("user"));
    this.staffService.getOneStaffUser(user["username"]).subscribe(user =>{
      this.user = user;
    })
    console.log(this.app);
    console.log(this.complete);
  }
  loadPatient(){
    this.patientservice.getPatientById(+this.route.snapshot.paramMap.get('id')).subscribe(patient => {
      this.patient = patient;
      this.checkIfAppointmentExists(patient.id);
      this.loadCarePlan(patient.carePlanId);
    })
  }
  loadCarePlan(careplanId : number){
    this.careplanService.getCarePlanById(careplanId).subscribe(careplan=>{
      this.plan = careplan;
    })
  }
  markAsCompleted(){
    this.app.date = this.today;
    this.app.carerId = this.user.id;
    this.app.patientId = this.patient.id;
    this.app.details = this.appDetails;
    this.appointmentService.registerAppointment(this.app).subscribe(response =>{
      this.router.navigateByUrl("/");
    });
  }
  checkIfAppointmentExists(id:any){
    this.appointmentService.getAppointmentById(id).subscribe(response =>{
      if(response!=null){
        this.app = response;
        this.complete = true;
      }
      else{
        //do nothing
      }
    })
  }
}
