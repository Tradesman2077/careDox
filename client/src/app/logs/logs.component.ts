import { Component, OnInit } from '@angular/core';
import { Appointment } from '../_models/Appointment';
import { AppointmentService } from '../_services/appointment.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  apps:Appointment[] =[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
  }
  getAppointments(){
    this.appointmentService.getAppointments().subscribe(apps =>{
      this.apps = apps;
    })
  }

}
