import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../share/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  allEmployee : Employee[];

  constructor(
    private employeeServer : EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployee();  
  }

  getAllEmployee(){
    this.employeeServer.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
      }
    )
  }

  deleteEmployee(id:number){
    this.employeeServer.deleteEmployeeById(id).subscribe(
      (data : Employee) => {
        this.getAllEmployee();
      }
    )
  }

  EditEmployee(tmp){
    this.employeeServer.curentEmployee = Object.assign({}, tmp);
  }

}
