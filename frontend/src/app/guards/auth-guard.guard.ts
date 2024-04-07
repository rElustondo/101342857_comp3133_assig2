import { CanActivateFn } from '@angular/router';
import { EmployeeService } from '../network/employee.service';
import { HttpClient } from '@angular/common/http';
export const authGuardGuard: CanActivateFn = async () => {
  console.log('authGuard#canActivate called');
  const isLoggedIn = localStorage.getItem('assignment2-login-details') !== null;
  console.log('authGuard#canActivate called2', isLoggedIn);
  return isLoggedIn;
};
