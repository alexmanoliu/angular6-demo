import { UserService } from '../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: Boolean = true;
  loaded: Boolean = false;
  enableAdd: Boolean = false;
  showUserForm: Boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {

    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

     this.userService.addUser(value);

     this.form.reset(value);
    }
  }

}
