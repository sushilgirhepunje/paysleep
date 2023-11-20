import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "https://8080-bbfefdebbdfddbcfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/Employee"
  constructor(private http:HttpClient) { }
    getAllEmployee():Observable<Employee[]>{
      return this.http.get<Employee[]>(this.url+"/AllEmployeeDetails");
   }

   getEmployeById(employeeId:string):Observable<Employee>{
    return this.http.get<Employee>(this.url+"/GetEmployeeDetailsById"+employeeId);
   }

   createEmployee(employee:Employee):Observable<Employee>{
    const httpOptions = {headers:new HttpHeaders({'Context-Type':'application/json'})}
    return this.http.post<Employee>(this.url+'/InsertEmployeeDetails/',employee,httpOptions);
   }

   updateEmployee(employee:Employee):Observable<Employee>{
    const httpOptions = {headers:new HttpHeaders({'Context-Type':'application/json'})}
    return this.http.put<Employee>(this.url+'/InsertEmployeeDetails/',employee,httpOptions);
   }
  //  deleteEmployee(employee:Employee):Observable<Employee>{
  //   const httpOptions = {headers:new HttpHeaders({'Context-Type':'application/json'})}
  //   return this.http.delete<Employee>(this.url+'/InsertEmployeeDetails/',employee,httpOptions);
  //  }
}

