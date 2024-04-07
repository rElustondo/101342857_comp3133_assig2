import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../network/employee.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = "";
  email = "";
  password = "";
  constructor(private router: Router, private employeeService:EmployeeService) {}

  onSubmit() {
    console.log('Signed up!');
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    this.employeeService.signUp(this.username, this.email, this.password).subscribe((data) => {
      if(data.data.signup.username === this.username) {
        console.log("user created successfuly",data.data.signup);
        this.router.navigate(['/login']);      }
    });
  }
}
