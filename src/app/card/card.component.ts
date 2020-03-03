import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() card: Card

    title = 'My Card Title';
    description = 'Description text';
    imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    disabled = false;

    textColor: string;


    ngOnInit() {
        /*change img on timer*/
        setTimeout(() => {
            this.imgUrl = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png';
            /*add disable to button*/
            this.disabled = true;
        }, 3000);
    }


    changeTitle() {
        this.card.title = 'This title has been changed';
    }

    inputHandler(event: any) {
        const value = event.target.value;
        this.title = value;
    }
}
