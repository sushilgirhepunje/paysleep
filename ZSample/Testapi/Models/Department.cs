using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Testapi.Models
{
    public class Department
    {
         public int DepartmentId { get; set; }

    public string DepartmentName { get; set; } = null!;

    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
    }
}