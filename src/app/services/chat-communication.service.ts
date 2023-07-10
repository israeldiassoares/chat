import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, first, tap } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ChatCommunicationService {

  private readonly baseURL: string = 'api/attendant'
  constructor(private httpClient: HttpClient) { }

  getAttendant(): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}`).pipe(
      first(),
      tap(response => console.log('response', response))
    )
  }

}
