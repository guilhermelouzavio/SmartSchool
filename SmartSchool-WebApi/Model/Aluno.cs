using System.Collections.Generic;

namespace SmartSchool_WebApi.Model
{
    public class Aluno {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Telefone { get; set; }

        public IEnumerable<ALunoDisciplina> AlunosDisciplinas { get; set; }
        public Aluno()
        {
            
        }
        public Aluno(int Id, string Nome, string Sobrenome, string Telefone)
        {
            this.Id = Id;
            this.Nome = Nome;
            this.Sobrenome = Sobrenome;
            this.Telefone = Telefone;
            
        }
    
    }


}