import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>{{loadState}}</p>
    <h3>Dashboard title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, nulla.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consequuntur dignissimos eaque fugiat
      laudantium.</p>
<!--    <input type="text" (input)="changeLoadText($event)" value="{{loadState}}">-->
    <input type="text" [(ngModel)]="loadState">
    <br>
    <br>
    <button (click)="changeLoad()">Change Loading</button>
  `
})

export class DashboardComponent {
  loadState = 'loading';

  changeLoad() {
    this.loadState = 'finished';
  }

  // changeLoadText(event) {
  //   this.loadState = event.target.value;
  // }
}
