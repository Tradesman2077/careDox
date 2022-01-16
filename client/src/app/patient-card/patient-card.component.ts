import { Component, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/_models/Patient';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {

  @Input() patient : Patient;
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
