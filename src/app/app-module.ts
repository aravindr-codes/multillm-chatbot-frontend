import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Chat } from './components/chat/chat';
import { ModelSelector } from './components/model-selector/model-selector';

@NgModule({
  declarations: [
    App,
    Chat,
    ModelSelector
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
