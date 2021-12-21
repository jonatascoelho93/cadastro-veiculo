import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';

import { Veiculo } from './../model/veiculo';
import { VeiculosService } from './../services/veiculos.service';
import { VeiculoDialogComponent } from './../veiculo-dialog/veiculo-dialog.component';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  veiculos$: Observable<Veiculo[]>;

  displayedColumns = ["id", "marca", "modelo", "ano", "vendido", "action"];

  ;

  constructor(private veiculosService : VeiculosService, public dialog: MatDialog){
    this.veiculos$ = this.veiculosService.getAll();

  }

  editVeiculo(veiculo: Veiculo) : void{
    this.openDialog(veiculo);
  }

  deleteVeiculo(id: number): void{
    this.veiculosService.delete(id).subscribe(() =>{
      this.veiculos$ = this.veiculosService.getAll()
    });

  }

  openDialog(veiculo: Veiculo | null): void {
    const dialogRef = this.dialog.open(VeiculoDialogComponent, {
      width: '500px',
      height: '450px',
      data: veiculo === null ?
        {id: null, modelo: null, marca: null, ano: null, descricao: null, vendido: false} : veiculo
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        if(result.id === null){
          this.veiculosService.create(result).subscribe(() =>{
            this.veiculos$ = this.veiculosService.getAll()
          });
        }else{
          this.veiculosService.update(result).subscribe(() =>{
            this.veiculos$ = this.veiculosService.getAll()
        })}
      }
    });

  }

  ngOnInit(): void {
  }

}
