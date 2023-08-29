import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-chamado',
  templateUrl: './ad-chamado.page.html',
  styleUrls: ['./ad-chamado.page.scss'],
})
export class AdChamadoPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }

  sairDoAplicativo(){
    this.router.navigate(['/sair-do-aplicativo']);
  }

}
