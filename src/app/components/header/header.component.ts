import { UsersService } from 'src/app/serv/users.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public UserInyected: UsersService) { }

  ngOnInit(): void {

      console.log(this.UserInyected.usr.name);
      console.log(this.UserInyected.usr.lastname);


  }

}
