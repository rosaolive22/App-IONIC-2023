import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public getPosts(): any {//
    return this.httpClient.get('http://localhost:3000/posts')
  }

  //  const criaNovaLinha =(nome, email) => {
  //   const  linhaNovoCliente= document.createElement ('tr')
  //   const conteudo = `
  //       <td class="td" data-td>${nome}</td>
  //       <td>${email}</td>
  //       <td>
  //           <ul class="tabela__botoes-controle">
  //               <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
  //               <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
  //           </ul>
  //       </td>`
  //       linhaNovoCliente.innerHTML = conteudo
  //       return linhaNovoCliente
  //  }

  ngOnInit() {
    this.getPosts()
  }


}

