import { Component, OnInit } from '@angular/core';

import { RequestCreate, ResponseCreate } from '../lista/users.model';
import { UsersService } from '../lista/users.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  request: RequestCreate = {
    nome: '',
    sobrenome: '',
    email: ''
  }

  response!: ResponseCreate;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
  }

  save() {
    this.userService.createUsers(this.request).subscribe(res => {
      //this.request = res;
      this.request = {
        nome: '',
        sobrenome: '',
        email: ''
      }
    })

  }

}
