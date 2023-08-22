import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdChamadoPageRoutingModule } from './ad-chamado-routing.module';

import { AdChamadoPage } from './ad-chamado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdChamadoPageRoutingModule
  ],
  declarations: [AdChamadoPage]
})
export class AdChamadoPageModule {}
