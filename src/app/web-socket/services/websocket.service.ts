import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket$: WebSocketSubject<any>;

  constructor() {
// deserializer ? serializer ? means
// deserializer is a function that takes a message and returns the data that we want to use in our application. In this case, we are using JSON.parse to convert the message data from a string to an object.
// serializer is a function that takes the data that we want to send to the server and converts it to a string. In this case, we are using JSON.stringify to convert the data from an object to a string before sending it to the server. 
    this.socket$ = webSocket({
      url: 'ws://localhost:3000',
      deserializer: msg => JSON.parse(msg.data),
      serializer: msg => JSON.stringify(msg)
    })

   }

  sendMessage(message: any) {
    this.socket$.next({text: message});
  }

  getMessages() {
    return this.socket$.asObservable();
  };

   

}
