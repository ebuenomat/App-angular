import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  value: string = '';

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = response;
    })
  }

  selecionaCliente(cliente: Cliente) {
    this.router.navigate([cliente.id], { relativeTo: this.route, state: cliente })
  }

  onClick() {
    this.router.navigate(['../'], {relativeTo: this.route})   
  }

  search() {
    this.clienteService.procuraCliente(this.value).subscribe(response =>{
      this.clientes=response
    })
  }
}
