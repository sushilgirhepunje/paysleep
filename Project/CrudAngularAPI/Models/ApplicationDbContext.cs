using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace CrudAngularAPI.Models
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(){}
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options){}

        public virtual DbSet<EmployeeDetail> EmployeeDetails {get;set;}
    }
}