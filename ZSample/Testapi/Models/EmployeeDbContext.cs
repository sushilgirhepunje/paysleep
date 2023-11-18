using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Testapi.Models
{
    public partial class EmployeeDbContext : DbContext
    {
         public EmployeeDbContext()
    {
    }

    public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

//     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//         => optionsBuilder.UseSqlServer("User ID=sa;password=examlyMssql@123;server=localhost;database=NewEmployeeDb;trusted_connection=false;Persist Security Info=false;encrypt=false;");

    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //     modelBuilder.Entity<Employee>(entity =>
    //     {
    //         entity.HasIndex(e => e.DepartmentId, "IX_Employees_DepartmentId");

    //         entity.Property(e => e.Salary).HasColumnType("decimal(18, 2)");

    //         entity.HasOne(d => d.Department).WithMany(p => p.Employees).HasForeignKey(d => d.DepartmentId);
    //     });

    //     OnModelCreatingPartial(modelBuilder);
    // }

    // partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}