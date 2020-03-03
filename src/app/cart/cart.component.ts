import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() items = [];
  newItem = '';
  @Output() itemChange = new EventEmitter<string>();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onItemChange() {
    this.itemChange.emit(this.newItem);
  }
}
