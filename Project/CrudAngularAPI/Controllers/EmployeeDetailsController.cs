using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrudAngularAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CrudAngularAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeDetailsController : ControllerBase
    {
        private ApplicationDbContext context;
        public EmployeeDetailsController(ApplicationDbContext _context){
            this.context = _context;
        }

        [HttpGet]
        [Route("AllEmployeeDetails")]
        public IActionResult GetEmployee(){
            try
            {
            var data = context.EmployeeDetails;
            return Ok(data);
                
            }
            catch (System.Exception)
            {                
                throw;
            }
        }

        [HttpGet]
        
    }
}