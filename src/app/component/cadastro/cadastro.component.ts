import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  cadastro: Cliente = {} as Cliente;

  cadastroForm: FormGroup;
  ufs: string[] = ['CE','RN','AM'];
  opts: string[] = ['Normal', 'Gold', 'Platinum'];

  private initForm():FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]),
      dataNascimento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      rua: new FormControl('', [Validators.required, Validators.maxLength(120)]),
      numero: new FormControl(''),
      bairro: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      uf: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      cidade: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      ativo: new FormControl(false, [Validators.required]), 
      tipo: new FormControl('',[Validators.required])
    })
  }

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) { 
    this.cadastroForm = this.initForm();
  }

  ngOnInit(){
   
  }

  onSubmit() {
    this.clienteService.salvaCliente(this.cadastroForm.value).subscribe(response => {
      this.router.navigate(['clientes'], { relativeTo: this.route }) 
     })    
  }
  
}
