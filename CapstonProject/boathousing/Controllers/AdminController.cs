using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using boathousing.Models;
namespace boathousing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
    
         private ApplicationDbContext _context;
        public AdminController(ApplicationDbContext context){
            this._context = context;
        }

    //         // Payment History
    [HttpGet]
    [Route("paymentHistory")]
    public IActionResult ViewPaymentHistory()
    {
        var payments = _context.Payments.ToList();
        return Ok(payments);
    }

    // // View Payment for Customer ID
    [HttpGet]
    [Route("paymentHistory/{userID}")]
    public IActionResult ViewPaymentForCustomer([FromRoute] long userID)
    {
        var payments = _context.Payments.Where(p => p.Booking.UserID == userID).ToList();
        return Ok(payments);
    }

    // // Admin Delete Vehicle
    [HttpDelete]
    [Route("deleteVehicle/{vehicleID}")]
    public  IActionResult DeleteVehicle( Vehicle vehicleID)
    {
        var vehicle = _context.Vehicles.(v => v.VehicleID == vehicleID);
        if (vehicle == null)
        {
            return NotFound("Vehicle not found");
        }

        _context.Vehicles.Remove(vehicle);
        _context.SaveChanges();

        return Ok(new { message = "Vehicle deleted successfully" });
    }

    }
}