import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private BASE_URL = `https://assignment2backend-998995de583c.herokuapp.com`; // Assuming your GraphQL API endpoint is '/graphql'
 
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

  public signUp(username: string, email:string, password: string): Observable<any> {
    const query = `
      mutation Mutation($username: String!, $email: String!, $password: String!) {
        signup(username: $username, email: $email, password: $password) {
          _id
          email
          username
        }
      }
    `;
    
    const variables = { username,email, password };
    
    return this.httpClient.post(`${this.BASE_URL}/graphql`, { query, variables });
  }
  
  public getAllEmployees(): Observable<any> {
    const query = `
      query GetAllEmployees {
        getAllEmployees {
          _id
          email
          first_name
          gender
          last_name
          salary
        }
      }
    `;
    
    return this.httpClient.post(`${this.BASE_URL}/graphql`, { query });
  }
  public getEmployeeById(id:string): Observable<any> {
    const query = `
      query Query($eid: ID!) {
        getEmployeeByEid(eid: $eid) {
          _id
          email
          first_name
          gender
          last_name
          salary
        }
      }
    `;
    const variables = { eid: id };
    
    return this.httpClient.post(`${this.BASE_URL}/graphql`, { query, variables });
  }
  
  public addEmployee(firstName:string, lastName:string, email:string, gender:string,salary:number): Observable<any> {
    const query = `
      mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $gender: String!, $salary: Float!) {
        addNewEmployee(first_name: $firstName, last_name: $lastName, email: $email, gender: $gender, salary: $salary) {
          _id
          email
          first_name
          gender
          last_name
          salary
        }
      }
    `;
    
    const variables = { firstName, lastName, email, gender, salary};
    
    return this.httpClient.post(`${this.BASE_URL}/graphql`, { query, variables });
  }
  public updateEmployee(eid:string,firstName:string, lastName:string, email:string, gender:string,salary:number): Observable<any> {
    const query = `
      mutation Mutation($eid: ID!, $firstName: String, $lastName: String, $email: String, $gender: String, $salary: Float) {
        updateEmployeeByEid(eid: $eid, first_name: $firstName, last_name: $lastName, email: $email, gender: $gender, salary: $salary) {
          _id
          email
          first_name
          gender
          last_name
          salary
        }
      }
    `;
    
    const variables = { eid,firstName, lastName, email, gender, salary};
    
    return this.httpClient.post(`${this.BASE_URL}/graphql`, { query, variables });
  }
  public deleteEmployee(eid:string): Observable<any> {
    const query = `mutation DeleteEmployeeByEid($eid: ID!) {
      deleteEmployeeByEid(eid: $eid)
    }
    `;
    
    const variables = { eid };
    
    return this.httpClient.post(`${this.BASE_URL}/graphql`, { query, variables });
  }
}
