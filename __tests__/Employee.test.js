const Employee = require('../lib/Employee.js')

test('creates a new employee', () => {
    const employee = new Employee('Ellyse');
  
    expect(employee.name).toBe('Ellyse');

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toBe(expect)
  });


  
// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`