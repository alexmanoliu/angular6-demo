import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['/user.style.css'],
    //     // styles: [`
    //     h2 {
    //     color: blue
    //     }
    //     `]
})

export class UserComponent implements OnInit {
    // Properties
    user: User;

    // Methods
    constructor() {

    }

    ngOnInit() {
        this.user = {
            firstName: 'Hatz',
            lastName: 'Qi',
            email: 'hatziqi@gmail.com',
            };
        }
    }


