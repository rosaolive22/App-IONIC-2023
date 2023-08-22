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

  constructor(public form: FormBuilder, public navCtrl: NavController) {
    this.userForm = this.form.group({
      senha: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  save(){
    let{ senha, email } = this.userForm.value;
    let addUsuario = new UsuarioModel(1, senha, email);
    console.log(addUsuario);
  }

}
