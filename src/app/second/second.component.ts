import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: false,
  template:`
  <h2>{{ title }}</h2>
  <h3>{{ message.content }}</h3>
  <h3> {{ message.error }}</h3>`,

  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  title2 = 'Second COmponent';
  message = {
    content: 'This is a message',
    error: 'Error',
  }

}
