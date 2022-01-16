import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Patient } from '../_models/Patient';



@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) {
    
   }
   getPatients() {
    return this.http.get<Patient[]>(this.baseUrl + 'patients');
  }

  getPatientById(id: number){
    return this.http.get<Patient>(this.baseUrl + 'patients/' + id);
  }
}
