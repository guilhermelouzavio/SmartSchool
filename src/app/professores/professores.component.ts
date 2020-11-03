import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores Mauricio Simão';
  profSelected: string;

  professores = [
    { id:1, nome: 'Rosa', disciplina:'Potugues' },
    { id:2, nome: 'Madalena'  ,   disciplina:'Matematica'},
    { id:3, nome: 'Marcos'  ,     disciplina:'Geografia'} ,
    
  ];

  profSelect(professor : any){
    this.profSelected = professor.nome;
  }
  voltar(professor:any){
    this.profSelected = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
