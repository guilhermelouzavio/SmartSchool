import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  modalRef: BsModalRef;
  alunoForm: FormGroup;
  tituloAlunos = 'Alunos';
  alunoSelected: Aluno;
  textSimple: string;
  
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) 
  {
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['' , Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['',  Validators.required]
    });
  }
  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(aluno:any){
    this.alunoSelected = null;
  }
  

}
