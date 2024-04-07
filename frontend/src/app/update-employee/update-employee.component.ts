import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../network/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  constructor(private router:Router, private employeeService:EmployeeService, private route: ActivatedRoute){} 
  employee:any = {};
  employeeId:any = "";
  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('_id');
    this.employeeService.getEmployeeById(this.employeeId).subscribe((data) => {
      console.log(data,"update-employee");
      this.employee = data.data.getEmployeeByEid;
    });
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.employee._id, this.employee.first_name,
      this.employee.last_name, this.employee.email, this.employee.gender, this.employee.salary
    ).subscribe((data) => {
      console.log(data,"update-employee");
      this.router.navigate(['/employee-list']);
    });
  }
  goBack(){
    this.router.navigate(['/employee-list']);
  }
}
