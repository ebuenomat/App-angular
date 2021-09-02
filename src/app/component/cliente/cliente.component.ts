import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientecad: Cliente = {} as Cliente;
  
  constructor() {}

  ngOnInit() {
      this.clientecad = history.state;
  } 

}
