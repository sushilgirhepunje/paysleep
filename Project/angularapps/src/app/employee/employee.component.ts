import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
// import { log } from 'console';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empdata : any[] = []
  constructor(private emp:EmployeeService ) {
    this.emp.getAllEmployee().subscribe(data =>{
      this.empdata.push(...data)
    })
    console.log(this.empdata);
    
   }

  ngOnInit() {
  }

}
