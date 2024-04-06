import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './network/employee.service';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: "employee-list", component: EmployeeListComponent, canActivate: [authGuardGuard] },
];
