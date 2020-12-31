using Microsoft.AspNetCore.Mvc;
using SmartSchool_WebApi.Data;
using SmartSchool_WebApi.Model;
using System;
using System.Threading.Tasks;

namespace SmartSchool_WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfessorController : ControllerBase
    {

        private readonly IRepository _repo;

        public ProfessorController(IRepository repo)
        {
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var result = await _repo.GetAllProfessoresAsync(true);
                return Ok(result);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{ProfessorId}")]
        public async Task<IActionResult> GetProfessoresById(int professorId)
        {
            try
            {
                var result = await _repo.GetProfessorAsyncById(professorId, true);
                return Ok(result);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("ByAluno/{alunoId}")]
        public async Task<IActionResult> GetByAlunoId(int alunoId)
        {
            try
            {
                var result = await _repo.GetProfessoresAsyncByAlunoId(alunoId, false);
                return Ok(result);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Professor professor)
        {
            try
            {
                _repo.Add(professor);

                if (await _repo.SaveChangesAsync())
                {

                    return Ok(professor);
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }

            return BadRequest();
        }

        [HttpPut("{ProfessorId}")]
        public async Task<IActionResult> Put(int professorId, Professor professor)
        {
            try
            {
                Professor pr = await _repo.GetProfessorAsyncById(professorId, false);

                if (pr is null) return NotFound("professor não encontrado");

                _repo.Update(professor);

                if (await _repo.SaveChangesAsync())

                    return Ok(professor);


            }
            catch (Exception ex)
            {
                throw ex;
            }

            return BadRequest();
        }

        [HttpDelete("{ProfessorId}")]
        public async Task<IActionResult> Delete(int professorId)
        {
            try
            {
                Professor pr = await _repo.GetProfessorAsyncById(professorId, false);

                if (pr is null) return NotFound();

                _repo.Delete(pr);

                if (await _repo.SaveChangesAsync())

                    return Ok("Deletado");


            }
            catch (Exception ex)
            {
                throw ex;
            }

            return BadRequest();
        }
    }
}