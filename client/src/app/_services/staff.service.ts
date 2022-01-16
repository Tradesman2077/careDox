import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staff } from '../_models/Staff';

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
  constructor(private http: HttpClient) {

   }

  getStaff() {
    return this.http.get<Staff>(this.baseUrl + 'users', httpOptions);
  }

  getOneStaffUser(username: string){
    return this.http.get<Staff>(this.baseUrl + 'users/' + username, httpOptions);
  }
}
