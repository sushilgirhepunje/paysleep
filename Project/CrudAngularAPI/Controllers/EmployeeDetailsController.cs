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
        [Route("GetEmployeeDetailsById/{employeeId}")]
        public IActionResult GetEmployeeById(int employeeId){
            try{
            var emp = context.EmployeeDetails.Find(employeeId);
                if(emp!= null)
                {
                    return Ok(emp);
                }else{
                    return NotFound();
                }
            }catch(Exception){
                throw;
            }
        }

        [HttpPost]
        [Route("InsertEmployeeDetails")]
        public IActionResult PostEmployee(EmployeeDetail empdetails)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try{
                context.EmployeeDetails.Add(empdetails);
                context.SaveChanges();
            }catch(Exception){
                throw;
            }
            return Created("Employee Details Added",empdetails);
        }
    }
}