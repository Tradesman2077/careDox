import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarePlan } from '../_models/CarePlan';
import { Patient } from '../_models/Patient';
import { CareplanService } from '../_services/careplan.service';
import { PatientService } from '../_services/patient.service';

@Component({
  selector: 'app-care-plan-edit',
  templateUrl: './care-plan-edit.component.html',
  styleUrls: ['./care-plan-edit.component.css']
})
export class CarePlanEditComponent implements OnInit {
  @ViewChild('editFormCarePlan') editFormCarePlan: NgForm;

  patientId:number;
  planId:any;
  patient:Patient;
  carePlan: any;
  plan:any ;

  constructor(private route: ActivatedRoute, private carePlanService: CareplanService, private patientService: PatientService,
    private toaster: ToastrService
    ) { }

  ngOnInit(): void {
    this.getPatient();
  }
  getPatient(){
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.patientService.getPatientById(this.patientId).subscribe(patient=>{
      this.patient = patient;
      this.checkIfHasCarePlan(patient);
    });
  }
  checkIfHasCarePlan(patient:any){ 
    if(patient.carePlanId == 0){
      var plan:CarePlan = {
        id: 0,
        levelOfUnderstanding : "",
        communication: "",
        mobility: "",
        personalCare: "",
        continenceCare: "",
        oralCare: "",
        nutritionAndHydration : "",
        skinCare: "",
        interestsAndHobbies: "",
        mentalHealth: "",
        medication: "",
        eolPref: "",
        religiousAndCulturalBeliefs:"",
        patientId :this.patient.id
      };
      this.carePlanService.addNewPlan(plan).subscribe(planFromApi => {
        this.plan = planFromApi;
        this.plan.patientId = this.patient.id;
        this.patient.carePlanId = this.plan.id;
        this.patientService.updatePatient(this.patient, this.patient.id).subscribe();
      });
      
    }
    else{
      console.log("hasplan");
      this.getPlan(this.patient.carePlanId);
    }
  }
  getPlan(id:any){
    //problem is here 
    this.carePlanService.getCarePlanById(id).subscribe(carePlan =>{
      this.carePlan = carePlan;
    });
  }
  updateCarePlan(){
    this.carePlanService.updateCarePlan(this.carePlan, this.carePlan.id).subscribe(() =>{
      this.toaster.success("Profile updated successfully");
      this.editFormCarePlan.reset(this.carePlan);
    });
  }

}
