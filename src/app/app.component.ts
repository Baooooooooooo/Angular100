import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Profile Card';
  image = "/w3images/team2.jpg";
  name = "John Doe";
  job = "CEO & Founder";
  university = "Harvard University";
  contact = "Contact";
  handler(){
    console.log('clicked');
  }
}
