import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../share/employee.service';
import { Employee } from '../../../model/employee.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.scss']
})
export class Employee2Component implements OnInit {
  public form : FormGroup
  public constructor(
    public employeeService : EmployeeService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      hoten: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      facebook: new FormControl('', Validators.required),
      twiter: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      dienthoai: new FormControl('', Validators.required),
    })
  }
  onSubmit(){
    console.warn();
  }
  createEmployee(){
    this.employeeService.createEmployee(this.employeeService = this.form.value).subscribe();
  }

  clearForm(){
    this.employeeService.curentEmployee = {
      id:null,
      hoten:'',
      email:'',
      facebook:'',
      twiter:'',
      website:'',
      dienthoai:''
    }
  }
}
