import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <!--<input type="text" [(ngModel)]="name">-->
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <h4>Hello {{name}}!</h4>
    <p>User Component</p>
  `
})

export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.name = event.target.value;
      this.nameChanged.emit(event.target.value);
  }
}
