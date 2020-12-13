import { User } from './../class/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usr: User = new User();
  constructor() {

    this.usr.users = 1;
    this.usr.name = 'beiker';
    this.usr.lastname = 'chinchilla';
  }
}
