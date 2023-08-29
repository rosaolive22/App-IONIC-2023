import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  HttpClient: any;
  public userLogin: User= {};//inicial como item vazio
  //Falta o cadastro

  constructor() { }

//Métodos:

  createUsuario() {
    this.HttpClient.post('http://localhost:3000/posts').subscribe(
      (data: any) => {
        // Quando a resposta é recebida com sucesso, os dados são impressos no console
        console.log('Dados da resposta:', data);
      },
      (error: any) => {
        // Trate erros, se necessário
        console.error('Erro na solicitação:', error);
      }
    );
  }

  ngOnInit() {}

  login() {
    console.log(this.userLogin);

  }
 //Falta o Cadastro
}
