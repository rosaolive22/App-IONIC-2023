import { ChamadoModel } from './../../models/chamado.model';
import { UsuarioModel } from 'src/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  private baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}get`).pipe(
      map((response) => {
        console.error('Ocorreu um erro na solicitação GET:', response);
        return response;
      }),
      catchError((error) => {
        console.error('Ocorreu um erro na solicitação GET:', error);
        throw error; // Re-throw para propagar o erro para o consumidor do serviço, se necessário.
      })
    );
  }

  public createUsuario(usuario: UsuarioModel): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}posts`, JSON.stringify(usuario)).pipe(
      catchError((error) => {
        console.error('Ocorreu um erro na solicitação POST de criação de usuário:', error);
        throw error;
      })
    );
  }

  public createChamado(chamado: ChamadoModel): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}posts`, JSON.stringify(chamado)).pipe(
      catchError((error) => {
        console.error('Ocorreu um erro na solicitação POST de criação de chamado:', error);
        throw error;
      })
    );
      //Colocar futuramente e somente o admi pode
    //public deleteUsuario(usuario: ClienteCadastrado)

    //public read
    //public update
    
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
    this.getPosts();

  }


  }




