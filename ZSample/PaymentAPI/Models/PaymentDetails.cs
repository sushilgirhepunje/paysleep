using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Models
{
    public class PaymentDetails
    {
        public int PaymentDetailId {get;set;}
        public string? CardOwnerNumber {get;set;}
        public string? CardNumber {get;set;}
        public string? ExpirationDate {get;set;}
        public string? SecurityCode {get;set;}
    }
}