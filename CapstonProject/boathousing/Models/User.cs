using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace boathousing.Models
{
    public class User
    {
         public long UserID { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string MobileNumber { get; set; }
    public string UserRole { get; set; }
    }
}