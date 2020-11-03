import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  tituloAlunos = 'Alunos';
  alunoSelected: string;
  
  alunos = [
    { id:1, nome: 'Maria Paula', sobrenome:'francisca', telefone: 58419259 },
    { id:2, nome: 'Larissa'  ,   sobrenome:'buriti', telefone: 58419259},
    { id:3, nome: 'Julia'  ,     sobrenome:'pinheiro', telefone: 58419259} ,
    { id:4, nome: 'Renata'  ,    sobrenome:'costa', telefone: 58419259},
    { id:5, nome: 'Junior'  ,    sobrenome:'silva', telefone: 58419259},
    { id:6, nome: 'Guilherme',   sobrenome:'', telefone: 58419259},
    { id:7, nome: 'Eloá' ,       sobrenome:'', telefone: 58419259},     
    { id:8, nome: 'fodase'  ,    sobrenome:'', telefone: 58419259}
  ];

  alunoSelect(aluno:any){
    this.alunoSelected = aluno.nome;
  }

  voltar(aluno:any){
    this.alunoSelected = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
