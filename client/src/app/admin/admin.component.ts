import { Component, OnInit } from '@angular/core';

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
    if(localStorage.getItem("user")){
      var user = JSON.parse(localStorage.getItem("user"));
      if(user["isAdmin"] == true){
        this.adminMode = true;

      }
    }
  }

 

}
