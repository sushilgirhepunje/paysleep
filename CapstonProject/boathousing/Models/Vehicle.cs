using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace boathousing.Models
{
    public class Vehicle
    {
    public long BookingID { get; set; }
    public long VehicleID { get; set; }
    public long UserID { get; set; }
    public string TravelDates { get; set; }
    public int NoOfPassengers { get; set; }
    public double TotalPrice { get; set; }

    
    }
}