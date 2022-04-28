import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../_models/Patient';
import { Staff } from '../_models/Staff';
import { PatientService } from '../_services/patient.service';
import { StaffService } from '../_services/staff.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-list-edit',
  templateUrl: './patient-list-edit.component.html',
  styleUrls: ['./patient-list-edit.component.css']
})
export class PatientListEditComponent implements OnInit {
  singlePatient: Patient;
  patients: Patient[] =[];
  staff: Staff;
  patNumList: string[] =[];
  allPatients: Patient[];
  


  constructor(private staffService : StaffService, private route: ActivatedRoute,
     private patientsService: PatientService,
     private toaster: ToastrService) { }

  ngOnInit(): void {
    this.loadStaffMemberAndPatients();
    this.getAllPatients();
  }
  getAllPatients(){
    this.patientsService.getPatients().subscribe(pats =>{
      this.allPatients = pats;
    })
  }
  loadStaffMemberAndPatients()
  {
    this.staffService.getOneStaffUser(this.route.snapshot.paramMap.get('username')).subscribe(user =>{
      this.staff = user;
      this.getPatientsInPatientList();
    })
  }
  loadStaffMemberAndRemovePatient(patientId)
  {
    this.staffService.getOneStaffUser(this.route.snapshot.paramMap.get('username')).subscribe(user =>{
      this.staff = user;
      this.removePatient(patientId);
    })
  }
  getPatientsInPatientList()
  {
    this.patNumList = this.staff.patientList.split(",");
    this.patNumList.pop();
    //get this staff members patients
    // for(let i = 0; i < this.staff.patientList.length; i++){
    //   if(this.staff.patientList[i] !== ","){
    //     this.patNumList.push(this.staff.patientList[i]);
    //   }
    // }
    console.log(this.patNumList);
    for(let i = 0; i < this.patNumList.length; i++){
        this.patientsService.getPatientById(parseInt(this.patNumList[i])).subscribe(patient =>{
          this.singlePatient = patient;
          if(this.singlePatient!=null){
            this.patients.push(this.singlePatient);
          }
          else{
            let arr = this.staff.patientList.split(",");
            let id = this.patNumList[i]
            if (arr.includes(id)){
            let index = arr.indexOf(id);
            arr.splice(index, 1);
            let list = [];

            for(let i =0; i < arr.length; i++){
            list.push(arr[i]);
              } 
            this.staff.patientList = list.toString();
            this.staffService.updateStaff(this.staff, this.staff.username).subscribe(() =>{
            }); 
            } 
          }
      });
    }
  }
  removePatient(patientId)
  { 
    if(window.confirm('Are you sure you want to delete this patient?')){
      let arr = this.staff.patientList.split(",");
      let id = patientId.toString();
      if (arr.includes(id)){
        let index = arr.indexOf(id);
        arr.splice(index, 1);
        let list = [];
      
        for(let i =0; i < arr.length; i++){
          list.push(arr[i]);
          //list.push(',');
        }
        this.staff.patientList = list.toString();
        console.log(list.toString());
        this.staffService.updateStaff(this.staff, this.staff.username).subscribe(() =>{
          window.location.reload();
          }); 
        }
    }
    
  }
  addPatient(patientId)
  {
    if(this.staff.patientList.includes(patientId)){
      this.toaster.warning('Patient already allocated to this staff member');
    }
    else{
      this.staff.patientList = this.staff.patientList.concat(patientId + ",");
    this.staffService.updateStaff(this.staff, this.staff.username).subscribe(() =>{
      window.location.reload();
      }); 
    }
  }
  loadStaffAddPatient(patientId)
  {
    this.staffService.getOneStaffUser(this.route.snapshot.paramMap.get('username')).subscribe(user =>{
      this.staff = user;
      this.addPatient(patientId);
    })
  }
}



