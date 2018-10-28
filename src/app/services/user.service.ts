import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Hatz',
        lastName: 'Matz',
        email: 'hatzqi@gmail.com',
        hide: true
      },
      {
        firstName: 'Qi',
        lastName: 'Snichi',
        email: 'snichi@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Sunny',
        lastName: 'Sunchi',
        email: 'sunchi@gmail.com',
        registered: new Date('01/03/2018 09:32:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
   return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }


}
