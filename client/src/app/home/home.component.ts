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
  adminMode = false;
  patientList = [];

  constructor( public accountService: AccountService) { }

  ngOnInit(): void {
    if(localStorage.getItem("user")){
      var user = JSON.parse(localStorage.getItem("user"));
      if(user["isAdmin"] == true){
        this.adminMode = true;

      }

    }
    
  }


  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  cancelRegisterMode(event : boolean ){
    this.registerMode = event;
  }

}
