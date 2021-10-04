const Employee = require('../lib/Employee.js')



test('creates a new employee', () => {
    const employee = new Employee('Ellyse');
  
    expect(employee.managerName).toBe('Ellyse');
    expect(employee.managerId).toEqual(expect.any(Number));
    expect(employee.managerEmail).toBe(expect.any(object))
  });




  
// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`