using System.Collections.Generic;

namespace SmartSchool_WebApi.Model
{
    public class Professor {
    public int Id { get; set; }
    public string Nome { get; set; }
    public IEnumerable<Disciplina> Disciplinas { get; set; }
    
    public Professor(){}   
    
    public Professor(int Id, string Nome)
    {
        this.Id = Id;
        this.Nome = Nome;
    
    }
    }
}