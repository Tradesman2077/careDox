import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarePlan } from '../_models/CarePlan';
import { Patient } from '../_models/Patient';
import { CareplanService } from '../_services/careplan.service';
import { PatientService } from '../_services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient : Patient;
  plan: CarePlan;
  constructor(private patientservice : PatientService, private route: ActivatedRoute, private careplanService : CareplanService ) { }

  ngOnInit(): void {

    this.loadPatient();

  }

  loadPatient(){
    this.patientservice.getPatientById(+this.route.snapshot.paramMap.get('id')).subscribe(patient => {
      this.patient = patient;
      this.loadCarePlan(patient.carePlanId);
    })
  }
  loadCarePlan(careplanId : number){
    this.careplanService.getPatientById(careplanId).subscribe(careplan=>{
      this.plan = careplan;

    })
  }

}
