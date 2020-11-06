import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores Mauricio Simão';
  profSelected: Professor;

  professores = [
    { id:1, nome: 'Rosa', disciplina:'Potugues' },
    { id:2, nome: 'Madalena'  ,   disciplina:'Matematica'},
    { id:3, nome: 'Marcos'  ,     disciplina:'Geografia'} ,
    
  ];

  profSelect(professor : Professor){
    this.profSelected = professor;
  }
  voltar(){
    this.profSelected = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
