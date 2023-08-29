//import { AngularFireAuth } from '@angular/fire/auth';
import { ServicePage } from './service/service.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//import { AngularFireModule } from '@angular/fire';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
//import { AngularFireAuthModule } from '@angular/fire/firestore';
import { environment } from './../environments/environment.prod';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule ],


  // [provideFirebaseApp(() => initializeApp(environment.firebase)),
  //   provideFirestore(() => getFirestore()),
  // ],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ServicePage],
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
