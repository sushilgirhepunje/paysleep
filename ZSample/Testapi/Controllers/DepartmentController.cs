using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Testapi.Models;

namespace Testapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentController : ControllerBase
    {
            IDepartment? repo;
            public DepartmentController(IDepartment _repo)
            {
                this.repo = _repo;
            }

            [HttpPost]
            [Route("Create")]
            public IActionResult PostDept(Department d)
            {
             if(ModelState.IsValid)
            {
                repo.AddDept(d);
                return Created("Record Added" , d);
            }
                return BadRequest();
            }
    }   
}

/*
IDepartment repo;
        public DepartmentController(IDepartment _repo)
        {
            this.repo = _repo;
        }

        [HttpGet]
        [Route("ListDept")]
        public IActionResult GetDept()
        {
            var data = repo.GetDepartments();
            return Ok(data);
        }

        [HttpPost]
        [Route("Create")]

        public IActionResult PostDept(Department d)
        {
            if(ModelState.IsValid)
            {
                repo.AddDept(d);
                return Created("Record Added" , d);
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("ListDept/{id}")]

        public IActionResult GetDept(int id)
        {
            var data = repo.FindDept(id);
            return Ok(data);
        }

        [HttpPut]
        [Route("EditDept/{id}")]

        public IActionResult PutDept(int id , Department d)
        {
            repo.EditDept(d);
            return Ok(); 
        }

        [HttpDelete]
        
        [Route("DeleteDept/{id}")]

        public IActionResult DeleteDept(int id)
        {
            repo.DeleteDept(id);
            return Ok();
        }


*/ 