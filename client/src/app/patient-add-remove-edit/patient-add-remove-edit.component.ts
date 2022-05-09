import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Patient } from '../_models/Patient';
import { Staff } from '../_models/Staff';
import { PatientService } from '../_services/patient.service';
import { StaffService } from '../_services/staff.service';

@Component({
  selector: 'app-patient-add-remove-edit',
  templateUrl: './patient-add-remove-edit.component.html',
  styleUrls: ['./patient-add-remove-edit.component.css']
})
export class PatientAddRemoveEditComponent implements OnInit {

  allPatients: Patient[];
  allStaff: Staff[];
  
  constructor(private patientsService: PatientService, private staffService: StaffService,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getAllPatients();
  }
  getAllPatients(){
    this.patientsService.getPatients().subscribe(pats =>{
      this.allPatients = pats;
    })
  }
  removePatient(id){
    if(window.confirm('Are you sure you want to delete this patient from the system?')){
    this.patientsService.removePatient(id).subscribe();

    this.staffService.getStaff().subscribe(staff =>{
      this.allStaff = staff;
      //cycle through staff and remove patient from patientList of said staff
      for(let i =0; i < this.allStaff.length; i++){
        let arr = this.allStaff[i].patientList.split(',');
        for(let j = 0; j < arr.length; j++){

          if (arr[j] == id){
            arr.splice(j, id);
            let arr2 = [];  
            for(let k =0; k < arr.length; k++){
              arr2.push(arr[k]);
              arr2.push(',');
            }
            //update staff
            this.allStaff[i].patientList = arr2.toString();
            this.updateStaff(this.allStaff[i], this.allStaff[i].username);
            }
          }
        }
      });
      window.location.reload();
    
  }
}
  updateStaff(staff: Staff, username : string){ 
    this.staffService.updateStaff(staff, username).subscribe(() =>{
      this.toaster.success(`Patient removed from ${username} patient list`);
      
    });
    
  }
  
}
