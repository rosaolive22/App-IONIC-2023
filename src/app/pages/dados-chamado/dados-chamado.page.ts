import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ChamadoModel } from 'src/models/chamado.model';

@Component({
  selector: 'app-dados-chamado',
  templateUrl: './dados-chamado.page.html',
  styleUrls: ['./dados-chamado.page.scss'],
})
export class DadosChamadoPage {
    chamadoForm: FormGroup;

  constructor(public form: FormBuilder, public navCtrl: NavController){
    this.chamadoForm = this.form.group({
      descricao:['', Validators.required],
      endereco:['', Validators.required]
    })
   }

    save(){
      let{ descricao, endereco}= this.chamadoForm.value;
      let addChamado = new ChamadoModel(1, descricao, endereco)
      console.log('Chamado cadastrado com sucesso.');
    }
    exibirMensagemDeCadastro() {
    window.alert('Cadastro realizado com sucesso!');
  }
}
