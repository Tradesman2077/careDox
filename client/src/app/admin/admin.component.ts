import { Component, OnInit } from '@angular/core';
import { Appointment } from '../_models/Appointment';
import { AppointmentService } from '../_services/appointment.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminMode : boolean = false;
  registerMode = true;
  

  constructor() { }

  ngOnInit(): void {

  }
  

 

}
