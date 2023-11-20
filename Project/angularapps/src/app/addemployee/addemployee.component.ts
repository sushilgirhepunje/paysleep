import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  empdata:Employee = {EmpId:null,EmpName:'',DateOfBirth:null,EmailId:'',Gender:'',Address:'',PinCode:''}
  constructor(private emp:EmployeeService,private route:Router) { }
  saveData(employee:Employee):void
  {
    this.empdata = employee
    this.emp.addEmployee(this.empdata).subscribe(     
      ()=>{
      alert('Record Added Successfully')
      this.route.navigate(['/InsertEmployeeDetails'])
      }
      )
  }
  ngOnInit() {
  }

}
