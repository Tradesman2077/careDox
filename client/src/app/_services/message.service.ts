import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../_models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { 
  }
  getMessagesByUserId(id:number){
    return this.http.get<Message>(this.baseUrl + 'messages/' + id);
  }
  createMessage(message:Message){
    console.log(message);
    return this.http.post(this.baseUrl + 'messages/' + 'createMessage', message);
  }

}
