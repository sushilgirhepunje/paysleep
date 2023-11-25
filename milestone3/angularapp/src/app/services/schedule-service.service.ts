import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {
private apiBaseUrl="https://8080-bbfefdebbdfddbcfabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api";

  constructor(private http:HttpClient) { }

  getPackages():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiBaseUrl}/laundry/schedules`);
  }

  getStatuses():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiBaseUrl}/laundry/schedules`);
  }

  getSchedules():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiBaseUrl}/laundry/schedules`);
  }

  httpOptions={headers:new HttpHeaders({'content-type':'application/json'})}
  
  createSchedule(scheduleData:any):Observable<any[]>{
    return this.http.post<any[]>(`${this.apiBaseUrl}/laundary/schedule/add`,scheduleData,this.httpOptions);
  }
  
  deleteSchedule(id:number){
    return this.http.delete<any[]>(`${this.apiBaseUrl}/laundary/schedule/delete`+id)
  }


} 
