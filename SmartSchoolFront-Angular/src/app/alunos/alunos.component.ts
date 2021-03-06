import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';
import { AlunosService } from './alunos.service';

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
  modo: string;
  
  public alunos: Aluno[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService, private alunoService: AlunosService) 
  {
    this.criarForm();
  }

  //carrega antes do construtor
  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(){
    this.alunoService.getAll().subscribe(
      //função para sucesso
      (aluno: Aluno[]) => {
        this.alunos = aluno;
      },
      //função para erro
      (erro: any) => {
        console.error(erro);      
      }
    );
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['' , Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['',  Validators.required]
    });
  }

  salvarAluno(aluno: Aluno){
    (aluno.id == 0) ? this.modo = 'post' : this.modo = 'put';
    
    this.alunoService[this.modo](aluno).subscribe(
      //função para sucesso
      (model: Aluno) => {
        console.log(model);
        this.carregarAlunos();
      },
      //função para erro
      (erro: any) => {
        console.error(erro);      
      }

    );
  }

  alunoSubmit(){
    this.salvarAluno(this.alunoForm.value);
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  deletarAluno(id: number){
    this.alunoService.delete(id).subscribe(
      (model: any) => {
        console.log(model);
        this.carregarAlunos();
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }
  alunoNovo(){
    this.alunoSelected = new Aluno();
    this.alunoForm.patchValue(this.alunoSelected);
  }

  voltar(aluno:any){
    this.alunoSelected = null;
  }
  

}
