import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  empdata:Employee = {EmpId:0,EmpName:'',DateOfBirth:"",EmailId:'',Gender:'',Address:'',PinCode:''}
  constructor(private ms:EmployeeService,private route:Route) { }
  saveData(employee):void{
    this.empdata = employee;
    this.ms.addEmployee(this.empdata).subscribe(
      ()=>{
        alert('Record Added Successfully')
        this.route.navigate(['/InsertEmployeeDetails'])
      }
    )
  }
  ngOnInit() {
  }

}
