using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace boathousing.Models
{
    public class Booking
    {
    public long BookingID { get; set; }
    public long VehicleID { get; set; }
    public long UserID {get;set;}
    public string VehicleName { get; set; }
    public string VehicleImageUrl { get; set; }
    public string VehicleAddress { get; set; }
    public string VehicleDescription { get; set; }
    public string VehicleAvailableStatus { get; set; }
    public double Price { get; set; }
    
    }
}