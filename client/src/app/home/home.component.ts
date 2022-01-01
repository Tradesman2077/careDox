import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  patients: any;

  constructor(private http: HttpClient, public accountService: AccountService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getPatients(){
    this.http.get('https://localhost:5001/api/patient').subscribe(patients => this.patients = patients);
  }
}
