const User = require('./models/Users')
const Employee = require('./models/Employees')

const resolvers = {
    Query: {
      getAllEmployees: async () => {
        try {
          const employees = await Employee.find();
          return employees;
        } catch (err) {
          throw new Error('Failed to fetch employees');
        }
      },
      getEmployeeByEid: async (_, { eid }) => {
        try {
          const employee = await Employee.findById(eid);
          return employee;
        } catch (err) {
          throw new Error('Employee not found');
        }
      },
      login: async (_, { usernameOrEmail, password }) => {
        try {
          const user = await User.findOne({
            $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
            password: password,
          });
          if (!user) {
            throw new Error('Invalid credentials');
          }
          return user;
        } catch (err) {
          throw new Error('Failed to login');
        }
      },
    },
    Mutation: {
      signup: async (_, { username, email, password }) => {
        try {
          const user = new User({ username, email, password });
          await user.save();
          return user;
        } catch (err) {
          throw new Error('Failed to create user');
        }
      },
      addNewEmployee: async (_, { first_name, last_name, email, gender, salary }) => {
        try {
          const employee = new Employee({ first_name, last_name, email, gender, salary });
          await employee.save();
          return employee;
        } catch (err) {
            console.log(err)
          throw new Error('Failed to create employee');
        }
      },
      updateEmployeeByEid: async (_, { eid, first_name, last_name, email, gender, salary }) => {
        try {
          const employee = await Employee.findByIdAndUpdate(
            eid,
            { first_name, last_name, email, gender, salary },
            { new: true }
          );
          return employee;
        } catch (err) {
          throw new Error('Failed to update employee');
        }
      },
      deleteEmployeeByEid: async (_, { eid }) => {
        try {
          await Employee.findByIdAndDelete(eid);
          return true;
        } catch (err) {
          throw new Error('Failed to delete employee');
        }
      },
    },
  };
  
  module.exports = resolvers;