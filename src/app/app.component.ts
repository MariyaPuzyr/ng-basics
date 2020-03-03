import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number = 0;
  title = 'ng-basics';
  rootName = 'testName';
  rootItems = ['Apples', 'Bananas', 'Cherries'];


  onItemWasAdded(event) {
    this.rootItems.push(event);
    console.log(this.rootItems);
  }
  onIncrease() {
    this.number = this.number * 2;
  }
}
