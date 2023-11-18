using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PaymentAPI.Models;
namespace PaymentAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentDetailController : ControllerBase
    {
        private PaymentDetailContext context;
        public PaymentDetailController(PaymentDetailContext _context){
            this.context = _context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var data = context.PaymentDetails;
            return Ok(data);
        }

        [HttpPost]
        public IActionResult Post(PaymentDetail paymentDetail)
        {
            context.PaymentDetails.Add(paymentDetail);
            context.SaveChanges();
            return CreatedAtAction("Get",new {id=paymentDetail.PaymentDetailId},paymentDetail);
        }

        // [HttpPost]
        // public IActionResult Post(Department deptartment){
        //    db.Departments.Add(deptartment);
        //    db.SaveChanges();
        //    return CreatedAtAction("Get",new {id=deptartment.DepartmentId},deptartment);

        // }
    }
}