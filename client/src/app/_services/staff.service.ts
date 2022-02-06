import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Staff } from '../_models/Staff';
import { PatientService } from './patient.service';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
  })
}

@Injectable({
  providedIn: 'root'
})


export class StaffService {

  baseUrl = environment.apiUrl; 
  staff: Staff[] = [];
  staffMember: Staff;


  constructor(private http: HttpClient) {

   }

  getStaff() {
    if(this.staff.length > 0) return of(this.staff);
    return this.http.get<Staff[]>(this.baseUrl + 'users').pipe(
      map(staff => {
        this.staff = staff;
        return staff;
      })
    );
  }

  getOneStaffUser(username: string){
    return this.http.get<Staff>(this.baseUrl + 'users/' + username, httpOptions);
  }

  getOneStaffUserMapped(username: string){
    return this.http.get<Staff>(this.baseUrl + 'users/' + username);
  }


  updateStaff(staff : Staff, username : string){
    console.log(staff.patientList);
    return this.http.put(this.baseUrl + 'users/' + username, staff, httpOptions);
  }

  
}
