import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:Message[];

  constructor() { }

  ngOnInit(): void {
  }

}
