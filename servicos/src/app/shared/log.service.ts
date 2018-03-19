import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  consoleLog(texto: String){
    console.log(texto);
  }

  constructor() { }

}
