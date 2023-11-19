import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import {Employee} from '../Models/employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSaved= false;
  employeeForm : any;
  allEmployees:Observable<Employee[]>;
  employeeIdUpdate = null;
  message=null;
  constructor(private formbuilder:FormBuilder,private employeeService:EmployeeService){

   }

  ngOnInit() {

  }
  loadAllEmployees(){
    this.allEmployees = this.employeeService.getAllEmployee();
  }
  onFormSubmit(){
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    this.CreateEmployee(employee);
    this.employeeForm.reset();
  }
  loadEmployeeToEdit(employeeId:string)
  {
    this.employeeService.getEmployeeById(employeeId).subscribe(employee=>{
      
    })
  }

}
