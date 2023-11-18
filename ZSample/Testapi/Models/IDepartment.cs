using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Testapi.Models
{
    public interface IDepartment
    {
        // Declare methods only
        List<Department> GetDepartments(); 
        Department FindDept(int id);
        void AddDept(Department dept);
    }
}