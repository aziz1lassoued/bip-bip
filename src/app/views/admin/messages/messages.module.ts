import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { UnreadmessagesComponent } from './unreadmessages/unreadmessages.component';


@NgModule({
  declarations: [
    MessagesComponent,
    UnreadmessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
