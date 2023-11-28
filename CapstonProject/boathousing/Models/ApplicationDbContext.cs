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
        public DbSet<Vehicle> Vehicle {get;set;}
        public DbSet<Payment> Payment {get;set;}
        public DbSet<Booking> Booking {get;set;}
    }
}