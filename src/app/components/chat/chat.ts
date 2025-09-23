import { Component, OnInit } from '@angular/core';
import { ChatService, ChatMessage } from '../../services/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.html',
  styleUrls: ['./chat.scss']
})
export class ChatComponent implements OnInit {
  models = ['replace-with-your-model-ids']; // <-- replace or populate from backend
  selectedModel = '';
  messages: ChatMessage[] = [];
  newMessage = '';
  loading = false;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // default model (choose one valid model ID for your provider)
    this.selectedModel = this.models[0] ?? '';
    // (optional) system prompt
    this.messages = [{ role: 'system', content: 'You are a helpful assistant.' }];
  }

  send() {
    const text = this.newMessage?.trim();
    if (!text) return;
    // push user message locally
    const userMsg: ChatMessage = { role: 'user', content: text };
    this.messages.push(userMsg);
    this.newMessage = '';
    this.loading = true;

    this.chatService.sendMessage(this.selectedModel, this.messages).subscribe({
      next: (res) => {
        // backend returns { reply: '...' } or entire provider raw response
        const reply = res?.reply
          ?? (res?.choices?.[0]?.message?.content)
          ?? (typeof res === 'string' ? res : JSON.stringify(res).slice(0, 200));
        this.messages.push({ role: 'assistant', content: reply });
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.messages.push({ role: 'assistant', content: 'Error: ' + (err?.error?.message || err.message || 'Unknown')});
        this.loading = false;
      }
    });
  }
}
