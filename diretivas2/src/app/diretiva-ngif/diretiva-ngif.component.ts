import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['teste'];

  mostrarCursos: boolean = false;

  mostrarCursosFunc(){
    this.mostrarCursos = !this.mostrarCursos;
    console.log('entrou');
  }

  constructor() { }

  ngOnInit() {
  }

}
