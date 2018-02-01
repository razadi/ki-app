import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InfoService {

  info: any = {};
  cargada: boolean = false;
  // cargada_sobre_nosotros: boolean = false;
  // equipo: any[] = [];

  constructor(public _http: Http) {

    this.carga_info();

  }


  public carga_info(){
    this._http.get("../../assets/data/info.app.json")
      .subscribe(data => {
        // console.log(data.json());
        this.cargada = true;
        this.info = data.json();
      });
  }

}
