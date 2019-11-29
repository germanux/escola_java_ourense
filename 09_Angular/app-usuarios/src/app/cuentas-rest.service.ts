import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CuentaBanc } from './modelo/CuentaBanc';

// Objeto que Angular se encarga de instaciar como un Singleton
@Injectable({     
  providedIn: 'root'
})
export class CuentasRestService {

  // Infiere / deduce a partir del valor ("" es String)
  urlApiRest = "http://127.0.0.1:8080/cuentas";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpCli: HttpClient) { }

  public add(nuevaCuenta: CuentaBanc) : Observable<CuentaBanc>
   {
    return this.httpCli.post<CuentaBanc>(this.urlApiRest, 
      nuevaCuenta, this.httpOptions);
  }

}