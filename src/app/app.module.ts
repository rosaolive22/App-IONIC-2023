import { ServicePage } from './service/service.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ServicePage],
  bootstrap: [AppComponent],
})
export class AppModule {

  //Definir rotas
  // const routes: Routes = [
  //   { path: 'clientes', component: ClienteListComponent },
  //   { path: 'clientes/:id', component: ClienteDetalheComponent },
  //   { path: 'clientes/novo', component: ClienteFormComponent },
  // ];

}
