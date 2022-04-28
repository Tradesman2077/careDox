import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarePlanEditComponent } from '../care-plan-edit/care-plan-edit.component';
import { CareplanService } from '../_services/careplan.service';
import { PatientService } from '../_services/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  plan:any = {};
  constructor(private patientService : PatientService, private toastr : ToastrService, private carePlanService : CareplanService) { }

  ngOnInit(): void {
  }

  registerPatient(){
    this.patientService.registerPatient(this.model).subscribe(
    );
    this.toastr.success("Patient was added");
  }



}
