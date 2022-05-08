import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Appointment } from '../_models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl = environment.apiUrl;
  appointments : Appointment[] = [];

  constructor(private http: HttpClient) {
  }

  getAppointments() {
    return this.http.get<Appointment[]>(this.baseUrl + 'appointment').pipe(
      map(appointments => {
        this.appointments = appointments;
        return appointments;
      })
    )
  }
 getAppointmentById(id: number){
    //const appointment = this.appointments.find(x => x.id === id);
    //if(appointment !== undefined){
      //return of (appointment);
    //}
    return this.http.get<Appointment>(this.baseUrl + 'appointment/' + id);
  }
 registerAppointment(model: any){
    return this.http.post(this.baseUrl +'appointment/' + 'registerAppointment', model);
  }
 removeAppointment(id: number){
    return this.http.delete(this.baseUrl + 'appointment'+ id);
  }
}
