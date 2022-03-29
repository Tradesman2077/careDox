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
  carePlan: CarePlan;

  constructor(private route: ActivatedRoute, private carePlanService: CareplanService, private patientService: PatientService,
    private toaster: ToastrService
    ) { }

  ngOnInit(): void {
    this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getCarePlan();
    
  }

  getCarePlan(){
    this.patientService.getPatientById(this.patientId).subscribe(patient=>{
      this.patient = patient;
    });

    this.carePlanService.getCarePlanById(this.patient.carePlanId).subscribe(carePlan =>{
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
