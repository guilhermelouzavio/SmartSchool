import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  
  modalRef:  BsModalRef;
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

  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  


  ngOnInit(): void {
  }

}
