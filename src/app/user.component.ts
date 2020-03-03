import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name">
    <h4>Hello {{name}}!</h4>
    <p>User Component</p>
  `
})

export class UserComponent {
  name = 'Mariya';

  onUserInput(event) {
    this.name = event.target.value;
  }
}
