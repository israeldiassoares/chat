import { Component, OnInit } from "@angular/core";

import { ChatMessage } from "../chat-message/chat-message.component";

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: [ './chat-app.component.scss' ]
})
export class ChatAppComponent implements OnInit {


  model = new ChatMessage("");

  messageList: string[] = [];

  sendMessage(): void { }

  constructor() { }

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit() { }

}
