namespace SmartSchool_WebApi.Model
{
    public class ALunoDisciplina
    {
        public int AlunoId { get; set; }
        public Aluno Aluno {get; set;}
        public int DisciplinaId { get; set; }
        public Disciplina Disciplina { get; set; }
        public ALunoDisciplina(){}
        public ALunoDisciplina(int alunoId , int disciplinaId){
            this.AlunoId = alunoId;
            this.DisciplinaId = disciplinaId;
        }

    }

}
