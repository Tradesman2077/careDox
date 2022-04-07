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
    return this.http.get<Message[]>(this.baseUrl + 'messages/' + id).pipe(
      map(messages => {
        this.messages = messages;
        
        return this.messages;
      })
    )
  }
  checkForUnreadMessages(id:number){
    let hasUnread = false;
    return this.http.get<Message[]>(this.baseUrl + 'messages/' + id).pipe(
      map(messages => {
        this.messages = messages;
        for(let i =0; i< this.messages.length; i++){
          if(this.messages[i].dateRead.toString() == '0001-01-01 00:00:00'){
            hasUnread = true;
          }
          else{
            hasUnread = false;
          }
        }
        return hasUnread;
      })
    )
  }
  createMessage(message:Message){
    console.log(message);
    return this.http.post(this.baseUrl + 'messages/' + 'createMessage', message);
  }
  updateMessage(messageId:number){
    return this.http.put(this.baseUrl + 'messages/'+ messageId, messageId);
  }
  

}
