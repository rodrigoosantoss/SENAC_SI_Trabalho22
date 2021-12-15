import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ResponseUsers } from "./users.model";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  responseUsers!: ResponseUsers;

  constructor(private userService: UsersService ) {}

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(res => this.responseUsers = res)
  }

}
