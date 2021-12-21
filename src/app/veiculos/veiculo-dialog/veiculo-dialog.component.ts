import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Veiculo } from './../model/veiculo';

@Component({
  selector: 'app-veiculo-dialog',
  templateUrl: './veiculo-dialog.component.html',
  styleUrls: ['./veiculo-dialog.component.css']
})
export class VeiculoDialogComponent implements OnInit {

  veiculo!: Veiculo;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Veiculo,
    public dialogRef: MatDialogRef<VeiculoDialogComponent>
    ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
