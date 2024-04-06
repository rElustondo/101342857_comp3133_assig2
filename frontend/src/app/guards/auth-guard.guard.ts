import { CanActivateFn } from '@angular/router';
import { EmployeeService } from '../network/employee.service';
import { HttpClient } from '@angular/common/http';
export const authGuardGuard: CanActivateFn = () => {
  console.log('authGuard#canActivate called');
  const isLoggedIn = localStorage.getItem('assignment2-login-details') !== null;
  console.log('authGuard#canActivate called', isLoggedIn);

  return isLoggedIn;
  return true
};
