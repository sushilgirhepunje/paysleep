import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  items:any[];

  constructor(private emp:EmployeeService) {
   }

  ngOnInit():void {
    this.loadItems();
  }

  loadItems():void{
    this.emp.getAllEmployee().subscribe(data=>{
      this.items=data;
    });
  }
}
