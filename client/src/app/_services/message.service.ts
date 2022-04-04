import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { Message } from '../_models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl;
  messages:Message[] = [];
  constructor(private http: HttpClient) { 
  }
  getMessagesByUserId(id:number){

    //return this.http.get<Message[]>(this.baseUrl + 'messages/' + id);
    // if(this.messages.length > 0) return of(this.messages);
    return this.http.get<Message[]>(this.baseUrl + 'messages/' + id).pipe(
      map(messages => {
        this.messages = messages;
        console.log(this.messages);
        return this.messages;
      })
    )
  }
  createMessage(message:Message){
    console.log(message);
    return this.http.post(this.baseUrl + 'messages/' + 'createMessage', message);
  }
  updateMessage(messageId:number, date:Date){
    
  }

}
