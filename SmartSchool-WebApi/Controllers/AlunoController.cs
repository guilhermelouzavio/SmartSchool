using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebApi.Data;
using SmartSchool_WebApi.Model;
using System;
using System.Threading.Tasks;

namespace SmartSchool_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly IRepository _repo;

        public AlunoController(IRepository repo)
        {
            _repo = repo;
           
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
          try{
                var result = await _repo.GetAllAlunosAsync(true);
                return Ok(result);

             }
          catch(Exception ex)
          {
             throw ex;
          }
        }

        [HttpGet("{AlunoId}")]
        public async Task<IActionResult> GetAlunoById(int alunoId)
        {
            try
            {
                var result = await _repo.GetAlunoAsyncById(alunoId , true);
                return Ok(result);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
       
        [HttpGet("ByDisciplina/{disciplinaId}")]
        public async Task<IActionResult> GetByDisciplinaId(int disciplinaId)
        {
            try
            {
                var result = await _repo.GetAlunosAsyncByDisciplinaId(disciplinaId, false);
                return Ok(result);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Aluno aluno)
        {
            try
            {
                _repo.Add(aluno);

                if(await _repo.SaveChangesAsync())
                {

                    return Ok(aluno);
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return BadRequest();
        }

        [HttpPut("{AlunoId}")]
        public async Task<IActionResult> Put(int alunoId , Aluno aluno)
        {
            try
            {
                Aluno al = await _repo.GetAlunoAsyncById(alunoId, false);
                
                if(al is null) return NotFound("Aluno n�o encontrado");

                _repo.Update(aluno);

                if(await _repo.SaveChangesAsync()) 
                    
                    return Ok(aluno);
                

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return BadRequest();
        }

        [HttpDelete("{AlunoId}")]
        public async Task<IActionResult> Delete (int alunoId)
        {
            try
            {
                Aluno al = await _repo.GetAlunoAsyncById(alunoId, false);

                if (al is null) return NotFound();

                _repo.Delete(al);

                if (await _repo.SaveChangesAsync())

                    return Ok(new { message = "Deletado"});


            }
            catch (Exception ex)
            {
                throw ex;
            }

            return BadRequest();
        }

    }
}