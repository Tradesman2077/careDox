import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../_models/Patient';
import { PatientService } from '../_services/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  @ViewChild('editFormPatient') editFormPatient: NgForm;
  patientId: any;
  patient : Patient;


  @HostListener('window:beforeunload', ['$event'])unloadNotification($event: any) {
    if(this.editFormPatient.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private patientsService: PatientService,private toaster : ToastrService ) { }

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('id');
    this.getPatient();
  }

  getPatient(){
    this.patientsService.getPatientById(this.patientId).subscribe(patient =>{
      this.patient = patient;
      
    });
  }
  updatePatient(){ 
    this.patientsService.updatePatient(this.patient, this.patient.id).subscribe(() =>{
      this.toaster.success("Profile updated successfully");
      this.editFormPatient.reset(this.patient);
    });
    
  }

}
