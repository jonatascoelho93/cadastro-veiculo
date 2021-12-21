import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoDialogComponent } from './veiculo-dialog/veiculo-dialog.component';




@NgModule({
  declarations: [
    VeiculosComponent,
    VeiculoDialogComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    AppMaterialModule
  ]
})
export class VeiculosModule { }
