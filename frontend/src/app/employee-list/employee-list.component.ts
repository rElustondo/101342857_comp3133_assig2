import { Component } from '@angular/core';
import { EmployeeService } from '../network/employee.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  constructor( private router: Router,private employeeService:EmployeeService){}
  employees:any = [];
  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      console.log(data,"all employees");
      this.employees = data.data.getAllEmployees;
    });
  }
  updateEmployee(employee:any){
    console.log(employee);
    this.router.navigate(['/update-employee', employee._id]);
  }
  viewEmployee(employee:any){
    console.log(employee, "view employee clicked");
    this.router.navigate(['/view-employee', employee._id]);
  }
  deleteEmployee(employee:any){
    console.log(employee);
    this.employeeService.deleteEmployee(employee._id).subscribe((data) => {
      console.log(data,"delete employee");
      this.employeeService.getAllEmployees().subscribe((data) => {
        console.log(data,"all employees");
        this.employees = data.data.getAllEmployees;
      });
    });
  }
  addEmployee(){
    this.router.navigate(['/add-employee']);
  }
}
