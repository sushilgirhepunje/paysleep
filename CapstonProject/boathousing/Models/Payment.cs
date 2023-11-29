using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace boathousing.Models
{
    public class Payment
    {
    public long PaymentID { get; set; }
    public long BookingID { get; set; }
    public long UserID { get; set; }
    public string? Status { get; set; }
    public double TotalAmount { get; set; }
    public double AmountPaid { get; set; }
    public DateTime PaymentDate { get; set; }
    public string? ModeOfPayment { get; set; }
    }
}