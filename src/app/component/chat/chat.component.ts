import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent {
    message: string ='';
    
    sendMessage(){
        console.log(this.message);
    }
}
