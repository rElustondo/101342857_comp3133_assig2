const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }
  
  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }
  
  
  type Query {
    getAllEmployees: [Employee]!
    getEmployeeByEid(eid: ID!): Employee
    login(usernameOrEmail: String!, password: String!): User
  }
  
  type Mutation {
    signup(username: String!, email: String!, password: String!): User
    addNewEmployee(first_name: String!, last_name: String!, email: String!, gender: String!, salary: Float!): Employee
    updateEmployeeByEid(eid: ID!, first_name: String, last_name: String, email: String, gender: String, salary: Float): Employee
    deleteEmployeeByEid(eid: ID!): Boolean
  }
  
`
module.exports = typeDefs;