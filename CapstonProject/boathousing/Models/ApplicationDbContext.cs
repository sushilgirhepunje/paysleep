using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace boathousing.Models
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options){}

        public DbSet<User> Users {get;set;}
        public DbSet<Vehicle> Vehicles {get;set;}
        public DbSet<Payment> Payments {get;set;}
        public DbSet<Booking> Bookings {get;set;}
    }
}