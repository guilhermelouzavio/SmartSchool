import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';
import { ProfessoresService } from './professores.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  
  // professores = [
  //   { id:1, nome: 'Rosa', disciplina:'Potugues' },
  //   { id:2, nome: 'Madalena'  ,   disciplina:'Matematica'},
  //   { id:3, nome: 'Marcos'  ,     disciplina:'Geografia'} ,
    
  // ];
  professorForm: FormGroup;
  modalRef:  BsModalRef;
  titulo = 'Professores Mauricio Simão';
  profSelected: Professor;
  professores: Professor[];

  constructor(private fb: FormBuilder, private modalService: BsModalService, private professoresService: ProfessoresService) {

    this.criarForm();

  }


  voltar(){
    this.profSelected = null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.carregarProfessor();
  }

  criarForm(){
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['' , Validators.required]
      
    });
  }
  salvarProfessor(professor: Professor){
    this.professoresService.put(professor.id, professor).subscribe(
      //função para sucesso
      (model: Professor) => {
        console.log(model);
        this.carregarProfessor();
      },
      //função para erro
      (erro: any) => {
        console.error(erro);      
      }

    );
  }

  professorSubmit(){
    this.salvarProfessor(this.professorForm.value);
    console.log(this.professorForm.value);
  }

 professorSelect(professor: Professor){
    this.profSelected = professor;
    this.professorForm.patchValue(professor);
  }
  
  carregarProfessor(){
    this.professoresService.getAll().subscribe(
      //função para sucesso
      (professor: Professor[]) => {
        this.professores = professor;
      },
      //função para erro
      (erro: any) => {
        console.error(erro);      
      }
    );
  }

}
