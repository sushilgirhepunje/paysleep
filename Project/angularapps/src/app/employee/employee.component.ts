import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/employee';
// import { log } from 'console';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // empdata : Employee[] = []
  empdata:any[];
  constructor(private emp:EmployeeService ) {
   }

  ngOnInit():void {
    this.loadItem();
  }
  loadItem():void{
    this.emp.getAllEmployee().subscribe(data=>{
      this.empdata=data;
    });
  }
}
