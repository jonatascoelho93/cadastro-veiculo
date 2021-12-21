import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { Veiculo } from './../model/veiculo';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private readonly API = 'http://localhost:8080/api/veiculos';

  getAll() {
    return  this.httpClient.get<Veiculo[]>(this.API).pipe(
      first()
    );
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.API}/${id}`);
  }

  create(veiculo:Veiculo): Observable<Veiculo>{
    return this.httpClient.post<Veiculo>(this.API, veiculo);
  }

  update(veiculo:Veiculo): Observable<any>{
    return this.httpClient.put<any>(`${this.API}/${veiculo.id}`, veiculo);
  }



  constructor(private httpClient: HttpClient) {

  }

}
