import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Hello there!</h2>
  <h3>Your name: {{ user.name }}</h3>
  <p> Your age: {{ user.age }}</p>
  <div *ngIf="+user.age >= 13"> Ban co the xem noi dung PG-13</div>
  <div *ngIf="+user.age < 13">Ban khong the xem noi dung PG-13</div>
  <div *ngIf="+user.age >= 18; else noPG18">Ban co the xem noi dung PG-18</div>
  <ng-template #noPG18>
    <div>Ban khong the xem noi dung PG-18</div>
  </ng-template>`,
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: 'Bao',
    age: '30',
  };
}
