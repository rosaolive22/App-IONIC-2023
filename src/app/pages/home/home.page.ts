import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from '@ionic/angular';

import { UsuarioModel } from 'src/models/usuario.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userForm: FormGroup;
  HttpClient: any;


  constructor(private form: FormBuilder, public navCtrl: NavController) {
    this.userForm = this.form.group({
      // senha: ['', Validators.required],
      // email: ['', Validators.required]
      senha: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(4)])],
      senhaConfirmation: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(4)])],
      email: ['', Validators.required]
    })
    // this.createData = this.form.group({
    //   senha: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(4)])],
    //   senhaConfirmation: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(4)])],
    //   email: ['', Validators.required]
    // })
  }

  save(){
    let{ senha, email } = this.userForm.value;
    let addUsuario = new UsuarioModel(1, senha, email);
    console.log(addUsuario);
  }
  getPosts() {
    this.HttpClient.get('http://localhost:3000/posts').subscribe(
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
  



}
