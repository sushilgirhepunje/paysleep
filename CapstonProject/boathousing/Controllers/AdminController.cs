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
    //      private ApplicationDbContext _context;
    //     public AdminController(ApplicationDbContext context){
    //         this._context = context;
    //     }

    //         // Payment History
    // [HttpGet]
    // [Route("paymentHistory")]
    // public async Task<IActionResult> ViewPaymentHistory()
    // {
    //     var payments = await _context.Payments.ToListAsync();
    //     return Ok(payments);
    // }

    // // View Payment for Customer ID
    // [HttpGet]
    // [Route("paymentHistory/{userID}")]
    // public async Task<IActionResult> ViewPaymentForCustomer([FromRoute] long userID)
    // {
    //     var payments = await _context.Payments.Where(p => p.Booking.UserID == userID).ToListAsync();
    //     return Ok(payments);
    // }

    // // Admin Delete Vehicle
    // [HttpDelete]
    // [Route("deleteVehicle/{vehicleID}")]
    // public async Task<IActionResult> DeleteVehicle([FromRoute] long vehicleID)
    // {
    //     var vehicle = await _context.Vehicles.FirstOrDefaultAsync(v => v.VehicleID == vehicleID);
    //     if (vehicle == null)
    //     {
    //         return NotFound("Vehicle not found");
    //     }

    //     _context.Vehicles.Remove(vehicle);
    //     await _context.SaveChangesAsync();

    //     return Ok(new { message = "Vehicle deleted successfully" });
    // }

    }
}