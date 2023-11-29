using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace boathousing.Models
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext(){}
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public virtual DbSet<Payment> Payments {get;set;}
        // public virtual DbSet<User> Users {get;set;}
        // public virtual DbSet<Vehicle> Vehicles {get;set;}
        // public virtual DbSet<Booking> Bookings {get;set;}
    }
}