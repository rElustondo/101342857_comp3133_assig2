import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../network/employee.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = "";
  password = "";
  constructor(private router: Router, private employeeService:EmployeeService) {}
  onSubmit() {
    debugger
    console.log('Submitted!');
    console.log(this.username);
    console.log(this.password);
    this.employeeService.login(this.username, this.password).subscribe((data) => {
      console.log(data);
      if(data.data.login.username === this.username) {
        localStorage.setItem('assignment2-login-details', JSON.stringify(data.data.login));
        this.router.navigate(['/employee-list']);
      }
    });
   
  }
}
