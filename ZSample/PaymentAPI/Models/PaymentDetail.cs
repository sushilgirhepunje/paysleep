using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace PaymentAPI.Models
{
    public class PaymentDetail
    {
        public int PaymentDetailId {get;set;}
        public string? CardOwnerName{get;set;}
        public string? CardNumber {get;set;}
        public string? ExpirationDate {get;set;}
        public string? SecurityCode {get;set;}
    }
}