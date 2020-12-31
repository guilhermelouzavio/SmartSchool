using System.Collections.Generic;

namespace SmartSchool_WebApi.Model
{
    public class Disciplina{
        public int Id { get; set; }
        public string Nome { get; set; }
        public int professorId { get; set; }
        public Professor professor { get; set; }
        public IEnumerable<ALunoDisciplina> AlunosDisciplinas { get; set; }
        public Disciplina(){}
        public Disciplina(int id, string nome, int professorId){
            
            this.Id = id;
            
            this.Nome = nome;

            this.professorId = professorId;

        }
    }
}