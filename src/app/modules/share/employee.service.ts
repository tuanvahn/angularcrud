import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';

const headerOption = {
  headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class EmployeeService {

  mockUrl = "http://localhost:3333/Employee";
  curentEmployee : Employee = {
    id:null,
    hoten:'',
    email:'',
    facebook:'',
    twiter:'',
    website:'',
    dienthoai:''
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.mockUrl, headerOption);
  }

  deleteEmployeeById(id : number):Observable<Employee>{
    return this.http.delete<Employee>(this.mockUrl + '/' + id, headerOption);
  }
  
  createEmployee(data : Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.mockUrl,data, headerOption);
  }

  updateEmployee(data : Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.mockUrl + "/" + data.id,data, headerOption);
  }

}
