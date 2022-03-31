import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Patient } from '../_models/Patient';



@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl = environment.apiUrl;

  patients: Patient[] = [];
  constructor(private http: HttpClient) {
   }
   getPatients() {
      console.log("get patients");
     if(this.patients.length > 0) return of(this.patients);
    return this.http.get<Patient[]>(this.baseUrl + 'patients').pipe(
      map(patients => {
        this.patients = patients;
        return patients;
      })
    )
  }
  getPatientById(id: number){
    const patient = this.patients.find(x => x.id === id);
    if(patient !== undefined){
      return of (patient);
    }
    return this.http.get<Patient>(this.baseUrl + 'patients/' + id);
  }
  registerPatient(model: any){
    
    return this.http.post(this.baseUrl +'patients/' + 'registerPatient', model);
  }
  removePatient(id: number){
    return this.http.delete(this.baseUrl + 'patients/'+ id);
  }
  updatePatient(patient : Patient, id : number){
    return this.http.put(this.baseUrl + 'patients/' + id, patient);
  }
}
