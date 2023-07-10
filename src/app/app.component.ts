import { Component, OnInit } from '@angular/core';
import { ChatCommunicationService } from "./services/chat-communication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'front-chat';

  constructor(private chatCommunication: ChatCommunicationService) { }

  ngOnInit(): void {
    console.log('init')
    this.chatCommunication.getAttendant().subscribe()
  }


}
