import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {

  message = '';
  messages: {text: string,time:string}[] = [];

  constructor(private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    this.webSocketService.getMessages().subscribe(
      (message: any) => {
        console.log('Received message:', message);
        this.messages.push(message);
      }
    );
  } 

  sendMessage() {
    if (this.message.trim() !== '') {
      this.webSocketService.sendMessage(this.message);
      this.message = '';
    } 
  };






}
