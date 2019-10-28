import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../share/employee.service';
import { Employee } from '../../../model/employee.model';
import { FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public form : FormGroup
  constructor(
    public employeeService : EmployeeService,
  ) { }
  formnew = new FormGroup({
    hoten: new FormControl('', Validators.required),
    facebook:  new FormControl('', Validators.required),
    twiter:  new FormControl('', Validators.required),
    website:  new FormControl('', Validators.required),
    dienthoai:  new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]))  
  })
  ngOnInit() {
  }
  createAndupdate(employeeData : Employee){
    if(employeeData.id != null){
      this.updateEmployee(employeeData);
    }else{
      this.createEmployee(employeeData);
    }
  }

  createEmployee(data : Employee){
    this.employeeService.createEmployee(data).subscribe();
  }

  updateEmployee(data : Employee){
    this.employeeService.updateEmployee(data).subscribe();
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
