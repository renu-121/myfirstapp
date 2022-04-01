import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/login.model';

@Injectable({
  providedIn:'root'
})

export class loginservices
{
  baseurl = 'https://localhost:7119/api/Employees';

  constructor(private http: HttpClient) { }

 // Get all Emp
  GetEmployee () : Observable<Employee[]> {
     return this.http.get<Employee[]>(this.baseurl);

}
    AddEmp(Employee: Employee) : Observable<Employee> {

    return  this.http.post<Employee>(this.baseurl, Employee );
}
}
