import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientecad: Cliente = {} as Cliente;
  
  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
      this.clientecad = history.state;
  } 

  onClick() {
    this.router.navigate(['../'], {relativeTo: this.route})   
  }

}
