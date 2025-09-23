import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { ChatComponent } from './components/chat/chat';
import { ModelSelector } from './components/model-selector/model-selector';

@NgModule({
  declarations: [
    App,
    ModelSelector
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChatComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
