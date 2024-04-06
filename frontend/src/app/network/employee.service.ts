import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private BASE_URL = `http://localhost:3000`; // Assuming your GraphQL API endpoint is '/graphql'
 
  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    const query = `
      query Login($username: String!, $password: String!) {
        login(usernameOrEmail: $username, password: $password) {
          _id
          username
          email
        }
      }
    `;
    const variables = { username, password };
    
    return this.httpClient.post(`${this.BASE_URL}/graphql`, { query, variables });
  }
}
