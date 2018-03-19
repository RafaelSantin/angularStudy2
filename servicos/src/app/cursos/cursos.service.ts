import { Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  private cursos: string[] = ['angular 2','java', 'node'];

  getCursos(){
    this.logService.consoleLog('logando o texto do lista curso hehe');
    return this.cursos;
  }

  addCurso(curso){
    this.cursos.push(curso);
    this.logService.consoleLog('logando o texto do add curso hehe');
  }

  constructor(private logService: LogService) { }

}
