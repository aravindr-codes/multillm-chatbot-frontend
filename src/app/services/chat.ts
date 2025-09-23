import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatMessage {
  role: 'system'|'user'|'assistant';
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) {}

  // model: string, messages: ChatMessage[]
  sendMessage(model: string, messages: ChatMessage[]): Observable<any> {
    return this.http.post('/api/chat', { model, messages });
  }
}
