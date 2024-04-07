import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../network/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  constructor(private router:Router,private employeeService:EmployeeService) {}
  formData: any = {}; 

  onSubmit(): void {
    console.log('Form submitted with data:', this.formData);
    this.employeeService.addEmployee(this.formData.first_name, this.formData.last_name, this.formData.email, this.formData.gender, this.formData.salary).subscribe((data) => {
      console.log("user adding successfully", data);
      if(data.data.addNewEmployee.first_name == this.formData.first_name){
        console.log("user added successfully", data);
        this.router.navigate(['/employee-list']);

      }
      
    });
  }
}
