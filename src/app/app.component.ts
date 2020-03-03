import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-basics';
  rootName = 'testName';

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
