import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './network/employee.service';
import { authGuardGuard } from './guards/auth-guard.guard';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: "employee-list", component: EmployeeListComponent, canActivate: [ authGuardGuard] },
    { path: "add-employee", component: AddEmployeeComponent, canActivate: [ authGuardGuard] },
    { path: 'view-employee/:_id', component: ViewEmployeeComponent, canActivate: [ authGuardGuard]},
    { path:"update-employee/:_id", component: UpdateEmployeeComponent, canActivate: [ authGuardGuard] },
];
