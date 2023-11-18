using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace Testapi.Models
{
    public class DepartmentRepository
    {
        
        private EmployeeDbContext db; // create a private DbCOntext variable 
        public DepartmentRepository(EmployeeDbContext context){
            this.db = context;
        }

        public void AddDept(Department dept) // Inherit method from interface and 
        {
            db.Departments.Add(dept);
            db.SaveChanges();
        }
        public void FindDept(int id){
            var data = db.Departments.Find(id);
            return data;
        }
        /*
        public void DeleteDept(int id)
        {
            Department d = context.Departments.Find(id);
            context.Departments.Remove(d);
            context.SaveChanges();
        }

        public void EditDept(Department Dept)
        {
            Department d = context.Departments.Find(Dept.DepartmentId);
            d.DepartmentName = Dept.DepartmentName;
            context.SaveChanges();

        }

        public Department FindDept(int id)
        {
            var data = context.Departments.Find(id);
            return  data;
        }

        public List<Department> GetDepartments()
        {
            return context.Departments.ToList();
        }
        */ 


    }
}