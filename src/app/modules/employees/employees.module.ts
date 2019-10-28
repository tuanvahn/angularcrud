import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from '../share/employee.service';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Employee2Component } from './employee2/employee2.component';
  
//Module là một lớp chứa các thành phần để thực hiện các chức năng nào đó.
@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent, Employee2Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [EmployeeComponent,EmployeeListComponent,Employee2Component],
  providers:[EmployeeService]
})
export class EmployeesModule { }
