import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Observer, first, tap } from "rxjs";
import { Socket } from "socket.io";
@Injectable({
  providedIn: 'root'
})
export class ChatCommunicationService {

  private readonly baseURL: string = 'api/attendant'
  constructor(private httpClient: HttpClient, private socket: Socket) { }

  getAttendant(): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}`).pipe(
      first(),
      tap(response => console.log('response', response))
    )
  }
  sendMessage(msg: string) {
    console.log(msg)
    this.socket.emit('message', msg);
  }
  getMessage() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('message', (message: string) => {
        observer.next(message)
      })
    })
  }
}
