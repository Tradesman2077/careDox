import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../_services/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private patientService : PatientService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  registerPatient(){
    //edit dateTIme
    let dob = this.model.dateOfBirth + "T00:00";


    this.patientService.registerPatient(this.model).subscribe(response =>{
      
    });
    this.toastr.success("Patient added");
  }



}
