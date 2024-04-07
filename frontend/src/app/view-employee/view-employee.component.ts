import { Component } from '@angular/core';
import { EmployeeService } from '../network/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {
  constructor(private router:Router, private employeeService:EmployeeService, private route: ActivatedRoute){} 
  employee:any = {};
  employeeId:any = "";
  goBack(){
    this.router.navigate(['/employee-list']);
  }
  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('_id');
    this.employeeService.getEmployeeById(this.employeeId).subscribe((data) => {
      console.log(data,"view-employee");
      this.employee = data.data.getEmployeeByEid;
    });
  }
}
